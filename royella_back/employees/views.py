from django.shortcuts import render
from django.http import JsonResponse
from employees.models import *
from employees.serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def manager(request):
    manager = ManagerSerializer(Manager.objects.get(id=1))
    return JsonResponse({"manager":manager.data})

@api_view(['PUT'])
def updateManager(request):
    manager = Manager.objects.get(id=1)
    managers = ManagerSerializer(manager, data=request.data)
    if managers.is_valid():
        managers.save()
        return Response ({'success':'Élément modifié'})
    return Response({'error':'Erreur, élément non modifié'})  

def employees(request):
    employees = EmployeeSerializer(Employee.objects.all(), many=True)
    return JsonResponse({"employees":employees.data})

@api_view(['DELETE'])
def deleteEmployees(request, id):
    employee = Employee.objects.get(id=id)
    employee.delete()
    return Response({"message": "Employee was deleted successfully!"})

@api_view(['PUT'])
def updateEmployees(request, id):
    employee = Employee.objects.get(id=id)
    employees = EmployeeSerializer(employee, data=request.data)
    if employees.is_valid():
        employees.save()
        return Response ({'success':'Élément modifié'})
    return Response({'error':'Erreur, élément non modifié'})  

def readEmployees(request, id):
    employee = EmployeeSerializer(Employee.objects.get(id=id))
    return JsonResponse({'employee':employee.data})

@api_view(['POST'])
def createEmployees(request):
    if request.method == 'POST':
        employees = EmployeeSerializer(data=request.data)
        if employees.is_valid():
            employees.save()
            return Response(employees.data)
        return Response(employees.errors)

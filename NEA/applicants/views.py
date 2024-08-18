from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status, generics
from .models import ApplicantDetails
from .models import JobListings
from .serializers import *
from django.contrib.auth.models import User

class UpdateApplicantDetails(generics.ListCreateAPIView):
    serializer_class = ApplicantSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return ApplicantDetails.objects.filter(fullname=user)
    
    def perform_create(self, serializer):
        print(f"Request data: {self.request.data}")
        print(f"Request files: {self.request.FILES}")
        if serializer.is_valid():
            serializer.save(fullname=self.request.user)
        else:
            print(serializer.errors)
    
   

class JobListings(generics.ListAPIView):
    queryset = JobListings.objects.all()
    serializer_class = JobSerializer
    permission_classes = [AllowAny]
    
        

class DeleteApplicantDetails(generics.DestroyAPIView):
    serializer_class = ApplicantSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return ApplicantDetails.objects.filter(fullname=user)

class CreateApplicantView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = ApplicantLoginSerializer
    permission_classes = [AllowAny]


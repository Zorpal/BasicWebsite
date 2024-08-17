from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status, generics
from .models import ApplicantDetails, JobListings 
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
            serializer.save(fullname=self.request.user, cv=self.request.FILES.get('cv'))
        else:
            print(serializer.errors)

class JobListings(generics.ListAPIView):
    queryset = JobListings.objects.all()
    serializer_class = JobSerializer
    
    def get_queryset(self):
        return JobListings.objects.all()

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


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
        if serializer.is_valid():
            serializer.save(fullname=self.request.user)
        else:
            print(serializer.errors)

class DeleteApplicantDetails(generics.ListCreateAPIView):
    serializer_class = ApplicantSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return ApplicantDetails.objects.filter(fullname=user)

class CreateApplicantView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = ApplicantLoginSerializer
    permission_classes = [AllowAny]

class FileUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        serializer = CVSerializer(data=request.data)
        if serializer.is_valid():
            file = serializer.validated_data['cv']
            # Save the file or process it as needed
            return Response(status=204)
        else:
            return Response(serializer.errors, status=400)
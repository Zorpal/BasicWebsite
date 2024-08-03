from rest_framework import serializers
from .models import ApplicantDetails, JobListings
from django.contrib.auth.models import User

class ApplicantLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {
            "password":{"write_only":True}
        }
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
    
class ApplicantSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ApplicantDetails
        fields = ('userid', 'fullname', 'email', 'phonenumber', 'skill_1', 'skill_2', 'skill_3', 'skill_4', 'skill_5', 'qualifications', 'preferences', 'cv')
        
        
class JobSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = JobListings
        fields = ('jobid', 'jobtitle', 'companyname', 'salary', 'jobdescription', 'dateposted', 'deadline', 'location')
        
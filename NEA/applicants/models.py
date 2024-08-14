from django.db import models
from django.contrib.auth.models import User
class ApplicantDetails(models.Model):
    id = models.AutoField(primary_key=True)
    fullname = models.CharField(max_length=50, null=False)
    email = models.EmailField(max_length=50, null=False)
    phonenumber = models.IntegerField()
    skill_1 = models.TextField(choices=[
        ('Problem-Solving', 'Problem-Solving'),
        ('Leadership', 'Leadership'),
        ('Time-Management', 'Time-Management'),
        ('Communication', 'Communication'),
        ('Collaboration', 'Collaboration'),
        ('Adaptability', 'Adaptability'),
        ('Creativity', 'Creativity'),
        ('Empathy', 'Empathy'),
        ('Negotiation', 'Negotiation'),
        ('Critical-Thinking', 'Critical-Thinking'),
    ], null=False)
    skill_2 = models.TextField(choices=[
        ('Problem-Solving', 'Problem-Solving'),
        ('Leadership', 'Leadership'),
        ('Time-Management', 'Time-Management'),
        ('Communication', 'Communication'),
        ('Collaboration', 'Collaboration'),
        ('Adaptability', 'Adaptability'),
        ('Creativity', 'Creativity'),
        ('Empathy', 'Empathy'),
        ('Negotiation', 'Negotiation'),
        ('Critical-Thinking', 'Critical-Thinking'),
    ], null=False)
    skill_3 = models.TextField(choices=[
       ('Problem-Solving', 'Problem-Solving'),
        ('Leadership', 'Leadership'),
        ('Time-Management', 'Time-Management'),
        ('Communication', 'Communication'),
        ('Collaboration', 'Collaboration'),
        ('Adaptability', 'Adaptability'),
        ('Creativity', 'Creativity'),
        ('Empathy', 'Empathy'),
        ('Negotiation', 'Negotiation'),
        ('Critical-Thinking', 'Critical-Thinking'),
    ], null=False)
    skill_4 = models.TextField(choices=[
        ('Problem-Solving', 'Problem-Solving'),
        ('Leadership', 'Leadership'),
        ('Time-Management', 'Time-Management'),
        ('Communication', 'Communication'),
        ('Collaboration', 'Collaboration'),
        ('Adaptability', 'Adaptability'),
        ('Creativity', 'Creativity'),
        ('Empathy', 'Empathy'),
        ('Negotiation', 'Negotiation'),
        ('Critical-Thinking', 'Critical-Thinking'),
    ], null=False)
    skill_5 = models.TextField(choices=[
        ('Problem-Solving', 'Problem-Solving'),
        ('Leadership', 'Leadership'),
        ('Time-Management', 'Time-Management'),
        ('Communication', 'Communication'),
        ('Collaboration', 'Collaboration'),
        ('Adaptability', 'Adaptability'),
        ('Creativity', 'Creativity'),
        ('Empathy', 'Empathy'),
        ('Negotiation', 'Negotiation'),
        ('Critical-Thinking', 'Critical-Thinking'),
    ], null=False)
    qualifications = models.TextField(null=False)
    preferences = models.CharField(max_length=500, null=False)
    cv = models.FileField(upload_to='cvs/', null=True)

    def __str__(self):
        return self.fullname

class JobListings(models.Model):
    jobid = models.AutoField(primary_key=True)
    jobtitle = models.CharField(max_length=50, null=False)
    companyname = models.CharField(max_length=50, null=False)
    salary = models.FloatField(null=False)
    jobdescription = models.CharField(max_length=2000, null=False)
    dateposted = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(null=True)
    location = models.TextField(null=False)

    def __str__(self):
        return self.jobtitle
    
class ApplicantLoginDetails(models.Model):
    loginid = models.ForeignKey(User, on_delete=models.CASCADE, related_name="userid")
    username = models.TextField(null=False)
    password = models.TextField(null=False)

    def __str__(self):
        return self.username
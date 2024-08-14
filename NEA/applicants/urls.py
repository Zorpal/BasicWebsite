from django.urls import path
from .views import *

urlpatterns = [
    path('applicantdetails/', UpdateApplicantDetails.as_view(), name="details-list"),
    path('applicantdetails/delete/<int:pk>/', DeleteApplicantDetails.as_view(), name="details-applicant-details"),
    path('upload/', FileUploadView.as_view(), name='file-upload'),
]
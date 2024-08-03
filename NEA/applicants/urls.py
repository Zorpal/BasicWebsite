from django.urls import path
from . import views

urlpatterns = [
    path('applicantdetails/', views.UpdateApplicantDetails.as_view(), name="details-list"),
    path('applicantdetails/delete/<int:pk>/', views.DeleteApplicantDetails.as_view(), name="details-delete"),
]
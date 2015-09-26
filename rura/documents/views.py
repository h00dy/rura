from django.shortcuts import render
from rest_framework import viewsets
from .models import (Firm, Contractor, InvoiceResponsible, OtherResponsible,
                     Delivered, AgreementSide, Sender, Invoice, Agreement,
                     Other)
from .serializers import (FirmSerializer, ContractorSerializer,
                          InvoiceResponsibleSerializer,
                          OtherResponsibleSerializer, DeliveredSerializer,
                          AgreementSideSerializer, SenderSerializer,
                          InvoiceSerializer, AgreementSerializer,
                          OtherSerializer)
# Create your views here.

class FirmViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Firm instances.
    """
    serializer_class = FirmSerializer
    queryset = Firm.objects.all()

class ContractorViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Contractor instances.
    """
    serializer_class = ContractorSerializer
    queryset = Contractor.objects.all()

class InvoiceResponsibleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing InvoiceResponsible instances.
    """
    serializer_class = InvoiceResponsibleSerializer
    queryset = InvoiceResponsible.objects.all()

class OtherResponsibleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing OtherResponsible instances.
    """
    serializer_class = OtherResponsibleSerializer
    queryset = OtherResponsible.objects.all()

class DeliveredViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Delivered instances.
    """
    serializer_class = DeliveredSerializer
    queryset = Delivered.objects.all()

class AgreementSideViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing AgreementSide instances.
    """
    serializer_class = AgreementSideSerializer
    queryset = AgreementSide.objects.all()

class SenderViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Sender instances.
    """
    serializer_class = SenderSerializer
    queryset = Sender.objects.all()

class InvoiceViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Invoice instances.
    """
    serializer_class = InvoiceSerializer
    queryset = Invoice.objects.all()

class AgreementViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Agreement instances.
    """
    serializer_class = AgreementSerializer
    queryset = Agreement.objects.all()

class OtherViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing Other instances.
    """
    serializer_class = OtherSerializer
    queryset = Other.objects.all()

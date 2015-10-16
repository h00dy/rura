from rest_framework import serializers
from .models import (Firm, Contractor, InvoiceResponsible, OtherResponsible,
                     Delivered, AgreementSide, Sender, Tax, Invoice, Agreement,
                     Other)


class TaxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tax
        fields = ('value', 'id')


class FirmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firm
        fields = ('name', 'id')


class ContractorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = ('name', 'id')


class InvoiceResponsibleSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvoiceResponsible
        fields = ('name', 'id')


class OtherResponsibleSerializer(serializers.ModelSerializer):
    class Meta:
        model = OtherResponsible
        fields = ('name', 'id')


class DeliveredSerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivered
        fields = ('name', 'id')


class AgreementSideSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgreementSide
        fields = ('name', 'id')


class SenderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sender
        fields = ('name', 'id')


class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice


class AgreementSerializer(serializers.ModelSerializer):
    agr_date = serializers.DateTimeField(required=False)

    class Meta:
        model = Agreement


class OtherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Other

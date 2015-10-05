from rest_framework import serializers
from .models import (Firm, Contractor, InvoiceResponsible, OtherResponsible,
                     Delivered, AgreementSide, Sender, Tax, Invoice, Agreement,
                     Other)


class TaxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tax
        fields = ('value',)


class FirmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firm
        fields = ('name', 'id')


class ContractorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = ('name',)


class InvoiceResponsibleSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvoiceResponsible
        fields = ('name',)


class OtherResponsibleSerializer(serializers.ModelSerializer):
    class Meta:
        model = OtherResponsible
        fields = ('name',)


class DeliveredSerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivered
        fields = ('name',)


class AgreementSideSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgreementSide
        fields = ('name',)


class SenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sender
        fields = ('name',)


class InvoiceSerializer(serializers.ModelSerializer):
    # tax = TaxSerializer()
    class Meta:
        model = Invoice


class AgreementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agreement


class OtherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Other

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Agreement',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('received_date', models.DateTimeField(verbose_name=b'Data wp\xc5\x82ywu')),
                ('registry_nr', models.CharField(unique=True, max_length=255, verbose_name=b'Nr w rejestrze')),
                ('scan', models.CharField(unique=True, max_length=255, verbose_name=b'Skan')),
                ('notes', models.TextField(verbose_name=b'Uwagi', blank=True)),
                ('document_type', models.CharField(default=b'IN', max_length=20, verbose_name=b'Typ dokumentu', choices=[(b'IN', b'Dokument przychodz\xc4\x85cy'), (b'OUT', b'Dokument wychodz\xc4\x85cy')])),
                ('agr_date', models.DateTimeField(verbose_name=b'Data umowy')),
                ('agr_subject', models.TextField(verbose_name=b'Przedmiot umowy')),
            ],
            options={
                'ordering': ['received_date'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='AgreementSide',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=255, verbose_name=b'Nazwa')),
            ],
            options={
                'verbose_name': 'Strona umowy',
                'verbose_name_plural': 'Strony umowy',
            },
        ),
        migrations.CreateModel(
            name='Contractor',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=255, verbose_name=b'Nazwa')),
            ],
            options={
                'verbose_name': 'Kontrahent',
                'verbose_name_plural': 'Kontrahenci',
            },
        ),
        migrations.CreateModel(
            name='Delivered',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=255, verbose_name=b'Nazwa')),
            ],
            options={
                'verbose_name': 'Przekazano',
                'verbose_name_plural': 'Przekazano',
            },
        ),
        migrations.CreateModel(
            name='Firm',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=255, verbose_name=b'Nazwa')),
            ],
            options={
                'verbose_name': 'Firma',
                'verbose_name_plural': 'Firmy',
            },
        ),
        migrations.CreateModel(
            name='Invoice',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('received_date', models.DateTimeField(verbose_name=b'Data wp\xc5\x82ywu')),
                ('registry_nr', models.CharField(unique=True, max_length=255, verbose_name=b'Nr w rejestrze')),
                ('scan', models.CharField(unique=True, max_length=255, verbose_name=b'Skan')),
                ('notes', models.TextField(verbose_name=b'Uwagi', blank=True)),
                ('document_type', models.CharField(default=b'IN', max_length=20, verbose_name=b'Typ dokumentu', choices=[(b'IN', b'Dokument przychodz\xc4\x85cy'), (b'OUT', b'Dokument wychodz\xc4\x85cy')])),
                ('netto', models.FloatField(verbose_name=b'Kwota netto')),
                ('brutto', models.FloatField(verbose_name=b'Kwota brutto')),
                ('paid', models.BooleanField(default=False, verbose_name=b'Zap\xc5\x82acono')),
                ('payment_date', models.DateTimeField(verbose_name=b'Termin p\xc5\x82atno\xc5\x9bci', blank=True)),
                ('contractor', models.ForeignKey(to='documents.Contractor')),
                ('delivered', models.ForeignKey(to='documents.Delivered')),
                ('firm', models.ForeignKey(to='documents.Firm')),
            ],
            options={
                'ordering': ['received_date'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='InvoiceResponsible',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=255, verbose_name=b'Nazwa')),
            ],
            options={
                'verbose_name': 'Osoba odpowiedzialna (FV)',
                'verbose_name_plural': 'Osoby odpowiedzialne (FV)',
            },
        ),
        migrations.CreateModel(
            name='Other',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('received_date', models.DateTimeField(verbose_name=b'Data wp\xc5\x82ywu')),
                ('registry_nr', models.CharField(unique=True, max_length=255, verbose_name=b'Nr w rejestrze')),
                ('scan', models.CharField(unique=True, max_length=255, verbose_name=b'Skan')),
                ('notes', models.TextField(verbose_name=b'Uwagi', blank=True)),
                ('document_type', models.CharField(default=b'IN', max_length=20, verbose_name=b'Typ dokumentu', choices=[(b'IN', b'Dokument przychodz\xc4\x85cy'), (b'OUT', b'Dokument wychodz\xc4\x85cy')])),
                ('description', models.TextField(verbose_name=b'Opis dokumentu')),
                ('firm', models.ForeignKey(to='documents.Firm')),
            ],
            options={
                'ordering': ['received_date'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='OtherResponsible',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=255, verbose_name=b'Nazwa')),
            ],
            options={
                'verbose_name': 'Osoba odpowiedzialna (Inne)',
                'verbose_name_plural': 'Osoby odpowiedzialne (Inne)',
            },
        ),
        migrations.CreateModel(
            name='Sender',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(unique=True, max_length=255, verbose_name=b'Nazwa')),
            ],
            options={
                'verbose_name': 'Nadawca',
                'verbose_name_plural': 'Nadawcy',
            },
        ),
        migrations.CreateModel(
            name='Tax',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('value', models.SmallIntegerField(unique=True, verbose_name=b'VAT')),
            ],
            options={
                'verbose_name': 'Podatek VAT',
                'verbose_name_plural': 'Podatki VAT',
            },
        ),
        migrations.AddField(
            model_name='other',
            name='responsible',
            field=models.ForeignKey(to='documents.OtherResponsible'),
        ),
        migrations.AddField(
            model_name='other',
            name='sender',
            field=models.ForeignKey(to='documents.Sender'),
        ),
        migrations.AddField(
            model_name='invoice',
            name='responsible',
            field=models.ForeignKey(to='documents.InvoiceResponsible'),
        ),
        migrations.AddField(
            model_name='invoice',
            name='tax',
            field=models.ForeignKey(to='documents.Tax'),
        ),
        migrations.AddField(
            model_name='agreement',
            name='agr_side',
            field=models.ForeignKey(to='documents.AgreementSide'),
        ),
        migrations.AddField(
            model_name='agreement',
            name='firm',
            field=models.ForeignKey(to='documents.Firm'),
        ),
    ]

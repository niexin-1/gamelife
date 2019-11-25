# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Goods',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('create_time', models.DateTimeField(verbose_name='创建时间', auto_now_add=True)),
                ('update_time', models.DateTimeField(verbose_name='更新时间', auto_now=True)),
                ('is_delete', models.BooleanField(verbose_name='删除标记', default=False)),
                ('name', models.CharField(verbose_name='游戏名称', max_length=20)),
                ('image', models.ImageField(upload_to='goods', verbose_name='商品图片')),
                ('theater', models.CharField(verbose_name='战区', max_length=10)),
            ],
            options={
                'verbose_name': '游戏商品',
                'db_table': 'df_goods',
                'verbose_name_plural': '游戏商品',
            },
        ),
        migrations.CreateModel(
            name='GoodsImage',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('create_time', models.DateTimeField(verbose_name='创建时间', auto_now_add=True)),
                ('update_time', models.DateTimeField(verbose_name='更新时间', auto_now=True)),
                ('is_delete', models.BooleanField(verbose_name='删除标记', default=False)),
                ('image', models.ImageField(upload_to='goods', verbose_name='图片路径')),
                ('goods', models.ForeignKey(verbose_name='游戏种类', to='goods.Goods')),
            ],
            options={
                'verbose_name': '游戏商品图片',
                'db_table': 'df_goods_image',
                'verbose_name_plural': '游戏商品图片',
            },
        ),
        migrations.CreateModel(
            name='GoodsSKU',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('create_time', models.DateTimeField(verbose_name='创建时间', auto_now_add=True)),
                ('update_time', models.DateTimeField(verbose_name='更新时间', auto_now=True)),
                ('is_delete', models.BooleanField(verbose_name='删除标记', default=False)),
                ('name', models.CharField(verbose_name='游戏商品名称', max_length=20)),
                ('desc', models.CharField(verbose_name='商品简介', max_length=256)),
                ('tour', models.CharField(verbose_name='端——手游', max_length=10)),
                ('roles', models.CharField(verbose_name='角色名称', max_length=100)),
                ('level', models.IntegerField(verbose_name='账号等级', default=1)),
                ('hreo_number', models.IntegerField(verbose_name='英雄个数', default=1)),
                ('skin', models.IntegerField(verbose_name='皮肤数', default=1)),
                ('theater', models.CharField(verbose_name='战区', max_length=20)),
                ('gold_master', models.CharField(verbose_name='金牌号主', max_length=100)),
                ('achievement', models.CharField(verbose_name='成就', max_length=10)),
                ('rent_h', models.DecimalField(max_digits=10, verbose_name='时租', decimal_places=2)),
                ('rent_d', models.DecimalField(max_digits=10, verbose_name='日租', decimal_places=2)),
                ('deposit', models.DecimalField(max_digits=10, verbose_name='押金', decimal_places=2)),
                ('rent_time', models.IntegerField(verbose_name='租时', default=1)),
                ('reputation', models.CharField(verbose_name='信誉', max_length=20)),
                ('top_way', models.CharField(verbose_name='上号方式', max_length=20)),
                ('image', models.ImageField(upload_to='GoodsSKU', verbose_name='商品图片')),
                ('goods', models.ForeignKey(verbose_name='游戏账号', to='goods.Goods')),
            ],
            options={
                'verbose_name': '游戏商品',
                'db_table': 'df_goods_sku',
                'verbose_name_plural': '游戏商品',
            },
        ),
        migrations.CreateModel(
            name='GoodsType',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('create_time', models.DateTimeField(verbose_name='创建时间', auto_now_add=True)),
                ('update_time', models.DateTimeField(verbose_name='更新时间', auto_now=True)),
                ('is_delete', models.BooleanField(verbose_name='删除标记', default=False)),
                ('name', models.CharField(verbose_name='游戏种类名称', max_length=20)),
                ('logo', models.CharField(verbose_name='游戏种类标识', max_length=20)),
                ('image', models.ImageField(upload_to='type', verbose_name='游戏商品类型图片')),
            ],
            options={
                'verbose_name': '游戏商品种类',
                'db_table': 'df_goods_type',
                'verbose_name_plural': '游戏商品种类',
            },
        ),
        migrations.CreateModel(
            name='IndexGoodsBanner',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('create_time', models.DateTimeField(verbose_name='创建时间', auto_now_add=True)),
                ('update_time', models.DateTimeField(verbose_name='更新时间', auto_now=True)),
                ('is_delete', models.BooleanField(verbose_name='删除标记', default=False)),
                ('image', models.ImageField(upload_to='banner', verbose_name='游戏图片')),
                ('index', models.SmallIntegerField(verbose_name='展示顺序', default=0)),
                ('sku', models.ForeignKey(verbose_name='游戏商品', to='goods.GoodsSKU')),
            ],
            options={
                'verbose_name': '首页轮播游戏商品',
                'db_table': 'df_index_banner',
                'verbose_name_plural': '首页轮播游戏商品',
            },
        ),
        migrations.AddField(
            model_name='goodssku',
            name='type',
            field=models.ForeignKey(verbose_name='游戏商品种类', to='goods.GoodsType'),
        ),
        migrations.AddField(
            model_name='goodsimage',
            name='sku',
            field=models.ForeignKey(verbose_name='游戏商品', to='goods.GoodsSKU'),
        ),
        migrations.AddField(
            model_name='goods',
            name='type',
            field=models.ForeignKey(verbose_name='游戏种类', to='goods.GoodsType'),
        ),
    ]

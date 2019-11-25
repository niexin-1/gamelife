from django.db import models
from django.contrib.auth.models import AbstractUser
from db.base_model import BaseModel
# Create your models here.


class User(AbstractUser, BaseModel):
    '''用户模型类'''

    class Meta:
        db_table = 'df_user'
        verbose_name = '用户'
        verbose_name_plural = verbose_name


class Assets(BaseModel):
    '''资产模型类'''
    user = models.ForeignKey('User', verbose_name='所属玩家')
    Master_info = models.CharField(max_length=20, verbose_name='玩家信息')

    player_reputation = models.CharField(max_length=20, verbose_name='玩家信誉')
    balance = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='余额')
    Lock_funds = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='锁定资金')
    zip_code = models.CharField(max_length=6, null=True, verbose_name='邮政编码')

    coupon = models.CharField(max_length=256, verbose_name='优惠券')
    Red_envelope = models.CharField(max_length=6,verbose_name='红包')
    Happy_beans = models.CharField(max_length=11, verbose_name='开心豆')

    class Meta:
        db_table = 'df_Assets'
        verbose_name = '资产'
        verbose_name_plural = verbose_name


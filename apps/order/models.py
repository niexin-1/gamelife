from django.db import models
from db.base_model import BaseModel
# Create your models here.


class OrderInfo(BaseModel):
    '''订单模型类'''
    PAY_METHOD = {
        '1':'货到付款',
        '2':'微信支付',
        '3': '支付宝',
        '4': '银联支付'
    }


    PAY_METHOD_CHOICES = (
        (1, '货到付款'),
        (2, '微信支付'),
        (3, '支付宝'),
        (4, '银联支付')
    )

    ORDER_STATUS = {
        1: '待支付',
        2: '待发货',
        3: '待收货',
        4: '待评价',
        5: '已完成'
    }


    ORDER_STATUS_CHOICES = (
        (1, '待支付'),
        (2, '待发货'),
        (3, '待收货'),
        (4, '待评价'),
        (5, '已完成')
    )

    order_id = models.CharField(max_length=128, primary_key=True, verbose_name='订单id')
    user = models.ForeignKey('user.User', verbose_name='用户')
    way = models.CharField(max_length=20, verbose_name='区服和上号方式')
    pay_method = models.SmallIntegerField(choices=PAY_METHOD_CHOICES, default=3, verbose_name='支付方式')
    total_hour = models.IntegerField(default=1, verbose_name='租时')
    rent = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='租金')
    deposit = models.DecimalField(max_digits=10, decimal_places=2,verbose_name='押金')
    order_status = models.SmallIntegerField(choices=ORDER_STATUS_CHOICES, default=1, verbose_name='订单状态')
    coupon = models.SmallIntegerField(choices=ORDER_STATUS_CHOICES, default=1, verbose_name='优惠券')
    payment = models.SmallIntegerField(choices=ORDER_STATUS_CHOICES, default=1, verbose_name='实际支付')
    trade_no = models.CharField(max_length=128, verbose_name='支付编号')


    class Meta:
        db_table = 'df_order_info'
        verbose_name = '订单'
        verbose_name_plural = verbose_name


class OrderGoods(BaseModel):
    '''订单商品模型类'''
    order = models.ForeignKey('OrderInfo', verbose_name='订单')
    sku = models.ForeignKey('goods.GoodsSKU', verbose_name='商品SKU')
    rent_time = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='租金')


    class Meta:
        db_table = 'df_order_goods'
        verbose_name = '订单商品'
        verbose_name_plural = verbose_name

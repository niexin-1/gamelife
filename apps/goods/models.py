from django.db import models
from db.base_model import BaseModel
from tinymce.models import HTMLField
# Create your models here.

class GoodsType(BaseModel):
    '''商品类型模型类'''
    name = models.CharField(max_length=20, verbose_name='游戏种类名称')
    logo = models.CharField(max_length=20, verbose_name='游戏种类标识')
    image = models.ImageField(upload_to='type', verbose_name='游戏商品类型图片')


    class Meta:
        db_table = 'df_goods_type'
        verbose_name = '游戏商品种类'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class GoodsSKU(BaseModel):
    '''游戏商品模型类'''
    status_choices = (
        (0, '下线'),
        (1, '上线'),
    )
    type = models.ForeignKey('GoodsType', verbose_name='游戏商品种类')
    goods = models.ForeignKey('Goods', verbose_name='游戏账号')
    name = models.CharField(max_length=20, verbose_name='游戏商品名称')
    desc = models.CharField(max_length=256, verbose_name='商品简介')
    tour = models.CharField(max_length=10,verbose_name='端——手游')
    roles = models.CharField(max_length=100,verbose_name='角色名称')
    level = models.IntegerField(default=1, verbose_name='账号等级')
    hreo_number = models.IntegerField(default=1, verbose_name='英雄个数')
    skin = models.IntegerField(default=1, verbose_name='皮肤数')
    theater = models.CharField(max_length=20,verbose_name='战区')
    gold_master = models.CharField(max_length=100,verbose_name='金牌号主')
    achievement = models.CharField(max_length=10,verbose_name='成就')
    rent_h = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='时租')
    rent_d = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='日租')
    deposit = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='押金')
    rent_time = models.IntegerField(default=1, verbose_name='租时')
    reputation = models.CharField(max_length=20, verbose_name='信誉')
    top_way = models.CharField(max_length=20, verbose_name='上号方式')
    image = models.ImageField(upload_to='GoodsSKU', verbose_name='商品图片')



    def __str__(self):
        return self.name

    class Meta:
        db_table = 'df_goods_sku'
        verbose_name = '游戏商品'
        verbose_name_plural = verbose_name


class Goods(BaseModel):
    '''所有游戏名称'''
    name = models.CharField(max_length=20, verbose_name='游戏名称')
    '''关联type表'''
    type = models.ForeignKey('GoodsType',verbose_name='游戏种类')
    # 富文本类型:带有格式的文本
    # detail = HTMLField(blank=True, verbose_name='商品详情')
    image = models.ImageField(upload_to='goods',verbose_name='商品图片')
    theater = models.CharField(max_length=10,verbose_name='战区')




    def __str__(self):
        return self.name

    class Meta:
        db_table = 'df_goods'
        verbose_name = '游戏商品'
        verbose_name_plural = verbose_name


class GoodsImage(BaseModel):
    '''商品图片模型类'''
    sku = models.ForeignKey('GoodsSKU', verbose_name='游戏商品')
    goods = models.ForeignKey('Goods',verbose_name='游戏种类')
    image = models.ImageField(upload_to='goods', verbose_name='图片路径')

    class Meta:
        db_table = 'df_goods_image'
        verbose_name = '游戏商品图片'
        verbose_name_plural = verbose_name


class IndexGoodsBanner(BaseModel):
    '''首页轮播商品展示模型类'''
    sku = models.ForeignKey('GoodsSKU', verbose_name='游戏商品')
    image = models.ImageField(upload_to='banner', verbose_name='游戏图片')
    index = models.SmallIntegerField(default=0, verbose_name='展示顺序')

    class Meta:
        db_table = 'df_index_banner'
        verbose_name = '首页轮播游戏商品'
        verbose_name_plural = verbose_name



//=============================================================================
// RPG Maker MZ - 自定义主菜单
//=============================================================================

/*:
 * @target MZ
 * @plugindesc v1.0.6 飞猫工作室-<自定义主菜单>
 * @author 飞猫工作室（Fly_Cat/Fly_Roc）
 * 
 * @param ---角色面板设置---
 * @default
 * 
 * @param ---角色血蓝条数值---
 * @parent ---角色面板设置---
 * @default
 * 
 * @param actorPicture
 * @text 角色血条显示开关
 * @parent ---角色血蓝条数值---
 * @desc true显示 false不显示
 * @default true
 * @type boolean
 * 
 * @param actorValueSwitch
 * @text 角色血蓝数值显示开关
 * @parent ---角色血蓝条数值---
 * @desc true显示 false不显示
 * @default true
 * @type boolean
 * 
 * @param actorLabelSwitch
 * @text 角色血蓝名称显示开关
 * @parent ---角色血蓝条数值---
 * @desc true显示 false不显示
 * @default true
 * @type boolean
 * 
 * @param actorLabelColor
 * @text 角色血蓝名称颜色
 * @parent ---角色血蓝条数值---
 * @desc 设置角色血蓝名称颜色
 * （默认：14）
 * @default 14
 * @type number
 * 
 * @param actorLabelFontSize
 * @text 角色血蓝名称字体大小
 * @parent ---角色血蓝条数值---
 * @desc 设置角色血蓝名称字体大小
 * （默认：16）
 * @default 16
 * @type number
 * 
 * @param actorValueFontSize
 * @text 角色血蓝数值字体大小
 * @parent ---角色血蓝条数值---
 * @desc 设置角色数值名称字体大小
 * （默认：14）
 * @default 14
 * @type number
 * 
 * @param actorValueString
 * @text 角色数值‘/’符号替换
 * @parent ---角色血蓝条数值---
 * @desc 角色数值中最小值/最大值
 * ‘/’符号替换
 * （默认：/）
 * @default /
 * @type string
 * 
 * @param actorHpBimapX
 * @text 角色面板X位置偏移量
 * @parent ---角色血蓝条数值---
 * @desc 设置角色面板X位置
 * （默认：-340）
 * @default -340
 * @type float
 * 
 * @param actorHpBimapY
 * @text 角色面板Y位置偏移量
 * @parent ---角色血蓝条数值---
 * @desc 设置角色面板Y位置
 * （默认：150）
 * @default 150
 * @type float
 * 
 * 
 * @param actorHpPicture
 * @text 角色HP条图片
 * @parent ---角色血蓝条数值---
 * @desc 选择角色HP条图片
 * @default
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param actorHpPictureX
 * @text 角色HP条图片X偏移量
 * @parent ---角色血蓝条数值---
 * @desc 设置角色HP条图片X偏移量
 * （默认：0）
 * @default 0
 * @type float
 * 
 * @param actorHpPictureY
 * @text 角色HP条图片Y偏移量
 * @parent ---角色血蓝条数值---
 * @desc 设置角色HP条图片Y偏移量
 * （默认：0）
 * @default 0
 * @type float
 * 
 * @param actorMpPicture
 * @text 角色MP条图片
 * @parent ---角色血蓝条数值---
 * @desc 选择角色MP条图片
 * @default
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param actorMpPictureX
 * @text 角色MP条图片X偏移量
 * @parent ---角色血蓝条数值---
 * @desc 设置角色MP条图片X偏移量
 * （默认：0）
 * @default 0
 * @type float
 *
 * @param actorMpPictureY
 * @text 角色MP条图片Y偏移量
 * @parent ---角色血蓝条数值---
 * @desc 设置角色MP条图片Y偏移量
 * （默认：0）
 * @default 0
 * @type float
 * 
 * @param actorTpPicture
 * @text 角色TP条图片
 * @parent ---角色血蓝条数值---
 * @desc 选择角色TP条图片
 * @default
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param actorTpPictureX
 * @text 角色TP条图片X偏移量
 * @parent ---角色血蓝条数值---
 * @desc 设置角色TP条图片X偏移量
 * （默认：0）
 * @default 0
 * @type float
 *
 * @param actorTpPictureY
 * @text 角色MP条图片Y偏移量
 * @parent ---角色血蓝条数值---
 * @desc 设置角色MP条图片Y偏移量
 * （默认：0）
 * @default 0
 * @type float
 * 
 * @param actorValueWidth
 * @text 角色数值框宽度增加量
 * @parent ---角色血蓝条数值---
 * @desc 角色数值框宽度增加量
 * （默认：100）
 * @default 100
 * @type float
 * 
 * @param actorValueHeight
 * @text 角色数值框高度增加量
 * @parent ---角色血蓝条数值---
 * @desc 角色数值框高度增加量
 * （默认：0）
 * @default 0
 * @type float
 * 
 * @param actorHpValueX
 * @text 角色Hp数值X偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Hp数值X偏移量
 * （默认：100）
 * @default 100
 * @type float
 *
 * @param actorHpValueY
 * @text 角色Hp数值Y偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Hp数值Y偏移量
 * （默认：-5）
 * @default -5
 * @type float
 * 
 * @param actorMpValueX
 * @text 角色Mp数值X偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Mp数值X偏移量
 * （默认：100）
 * @default 100
 * @type float
 *
 * @param actorMpValueY
 * @text 角色Hp数值Y偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Mp数值Y偏移量
 * （默认：-5）
 * @default -5
 * @type float
 * 
 * @param actorTpValueX
 * @text 角色Tp数值X偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Tp数值X偏移量
 * （默认：100）
 * @default 100
 * @type float
 *
 * @param actorTpValueY
 * @text 角色Tp数值Y偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Tp数值Y偏移量
 * （默认：-5）
 * @default -5
 * @type float
 * 
 * @param actorHpLabelX
 * @text 角色Hp名称X偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Hp名称X偏移量
 * （默认：0）
 * @default 0
 * @type float
 *
 * @param actorHpLabelY
 * @text 角色Hp名称Y偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Hp名称Y偏移量
 * （默认：0）
 * @default 0
 * @type float
 * 
 * @param actorMpLabelX
 * @text 角色Mp名称X偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Mp名称X偏移量
 * （默认：0）
 * @default 0
 * @type float
 *
 * @param actorMpLabelY
 * @text 角色Mp名称Y偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Mp名称Y偏移量
 * （默认：0）
 * @default 0
 * @type float
 * 
 * @param actorTpLabelX
 * @text 角色Tp名称X偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Tp名称X偏移量
 * （默认：0）
 * @default 0
 * @type float
 *
 * @param actorTpLabelY
 * @text 角色Tp名称Y偏移量
 * @parent ---角色血蓝条数值---
 * @desc 角色Tp名称Y偏移量
 * （默认：0）
 * @default 0
 * @type float
 * 
 * @param ---角色名字/职业/等级/状态---
 * @parent ---角色面板设置---
 * @default
 * 
 * @param fontSize
 * @text 角色窗口字体大小
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色窗口字体大小
 * （默认：14）
 * @default 14
 * @type number
 * 
 * @param fontNameSize
 * @text 角色名字字体大小
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色名字字体大小
 * （默认：20）
 * @default 20
 * @type number
 * 
 * @param nameX
 * @text 角色名字X偏移量
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色名字X偏移量
 * （默认：-170）
 * @default -170
 * @type float
 * 
 * @param nameY
 * @text 角色名字Y偏移量
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色名字Y偏移量
 * （默认：-250）
 * @default -250
 * @type float
 * 
 * @param classNameSize
 * @text 角色职业字体大小
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色职业字体大小
 * （默认：14）
 * @default 14
 * @type number
 *
 * @param classNameX
 * @text 角色职业X偏移量
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置职业名字X偏移量
 * （默认：-350）
 * @default -350
 * @type float
 *
 * @param classNameY
 * @text 角色职业Y偏移量
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置职业名字Y偏移量
 * （默认：-230）
 * @default -230
 * @type float
 * 
 * @param levelTextSize
 * @text 角色等级描述字体大小
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色等级描述字体大小
 * （默认：14）
 * @default 14
 * @type number
 *
 * @param levelTextColor
 * @text 角色等级描述字体颜色
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色等级描述字体颜色
 * （默认：3）
 * @default 3
 * @type number
 * 
 * @param levelTextX
 * @text 角色等级描述X偏移量
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色等级描述X偏移量
 * （默认：-170）
 * @default -170
 * @type float
 *
 * @param levelTextY
 * @text 角色等级描述Y偏移量
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色等级描述Y偏移量
 * （默认：40）
 * @default 40
 * @type float
 * 
 * @param levelSize
 * @text 角色等级字体大小
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色等级字体大小
 * （默认：14）
 * @default 14
 * @type number
 *
 * @param levelColor
 * @text 角色等级字体颜色
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色等级字体颜色
 * （默认：14）
 * @default 14
 * @type number
 * 
 * @param levelX
 * @text 角色等级X偏移量
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色等级X偏移量
 * （默认：-160）
 * @default -160
 * @type float
 *
 * @param levelY
 * @text 角色等级Y偏移量
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色等级Y偏移量
 * （默认：40）
 * @default 40
 * @type float
 * 
 * @param actorStatusIconColspacing
 * @text 角色状态图标间距补偿量
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色状态图标间距补偿量
 * （默认：0）
 * @default 0
 * @type float
 * 
 * @param actorStatusIconX
 * @text 角色状态图标X偏移量
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色状态图标X偏移量
 * （默认：-170）
 * @default -170
 * @type float
 *
 * @param actorStatusIconY
 * @text 角色状态图标Y偏移量
 * @parent ---角色名字/职业/等级/状态---
 * @desc 设置角色状态图标Y偏移量
 * （默认：50）
 * @default 50
 * @type float
 * 
 * @param ---角色图片缩放管理---
 * @parent ---角色面板设置---
 * @default
 * 
 * @param autoScale
 * @text 自动缩放/手动缩放
 * @parent ---角色图片缩放管理---
 * @desc 自动缩放立绘/头像/背景已适应屏幕
 * 默认：true false为自由模式
 * @default true
 * @type boolean
 * 
 * @param scaleWidth
 * @text 手动模式-角色图片最大宽度设置
 * @parent ---角色图片缩放管理---
 * @desc 手动模式下，可手动调整角色图片最大宽度
 * （默认：this.width / this.maxCols()）
 * @default this.width / this.maxCols()
 * @type string
 * 
 * @param scaleHeight
 * @text 手动模式-角色图片最大高度设置
 * @parent ---角色图片缩放管理---
 * @desc 手动模式下，可手动调整角色图片最大高度
 * （默认：this.itemHeight()）
 * @default this.itemHeight()
 * @type string
 * 
 * @param actorPictureX
 * @text 角色图片偏移量X
 * @parent ---角色图片缩放管理---
 * @desc （立绘/半身/头像）X轴偏移量
 * （X正向右 X负向左）
 * @default 0
 * @type float
 * 
 * @param actorPictureY
 * @text 角色图片偏移量Y
 * @parent ---角色图片缩放管理---
 * @desc （立绘/半身/头像）Y轴偏移量
 * （Y正向下 Y负向上）
 * @default 0
 * @type float
 * 
 * @param ---角色窗口---
 * @parent ---角色面板设置---
 * @default
 * 
 * @param actorMenuBackGround
 * @text 角色窗口背景图片
 * @parent ---角色窗口---
 * @desc 选择角色窗口背景图片
 * @default
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param actorMenuCols
 * @text 角色窗口显示列数
 * @parent ---角色窗口---
 * @desc 角色窗口列数设置
 * （默认：4列）
 * @default 4
 * @type number
 * 
 * @param actorMenuRows
 * @text 角色窗口显示行数
 * @parent ---角色窗口---
 * @desc 角色窗口行数设置
 * （默认：1行）
 * @default 1
 * @type number
 * 
 * @param actorMenuColSpacing
 * @text 角色窗口列间距
 * @parent ---角色窗口---
 * @desc 角色窗口列间距设置
 * （默认：5）
 * @default 5
 * @type number
 * 
 * @param actorMenuRowSpacing
 * @text 角色窗口行间距
 * @parent ---角色窗口---
 * @desc 角色窗口行间距设置
 * （默认：4）
 * @default 4
 * @type number
 * 
 * @param actorMenuWidth
 * @text 角色窗口宽度设置
 * @parent ---角色窗口---
 * @desc 角色窗口宽度设置
 * （默认：系统窗口大小）
 * @default Graphics.width
 * @type string
 * 
 * @param actorMenuHeight
 * @text 角色窗口高度设置
 * @parent ---角色窗口---
 * @desc 角色窗口高度设置
 * （默认：系统窗口大小）
 * @default Graphics.height
 * @type string
 * 
 * @param actorMenuX
 * @text 角色窗口X坐标设置
 * @parent ---角色窗口---
 * @desc 角色窗口X坐标设置
 * （默认：0）
 * @default 0
 * @type string
 * 
 * @param actorMenuY
 * @text 角色窗口Y坐标设置
 * @parent ---角色窗口---
 * @desc 角色窗口Y坐标设置
 * （默认：0）
 * @default 0
 * @type string
 * 
 * @param ---光标---
 * @default 
 * 
 * @param autoSort
 * @text 自动排序光标（键盘模式）
 * @parent ---光标---
 * @desc 设置键盘操作时图片光标移动顺序
 * 默认：true
 * @default true
 * @type boolean
 * 
 * @param cursorColor
 * @text 光标RGB颜色
 * @parent ---光标---
 * @desc 设置光标的RGB颜色
 * 默认：[50,50,50,0]
 * @default [50,50,50,0]
 * @type string
 * 
 * @param ---主菜单---
 * @default
 * 
 * @param menuBackGround
 * @text 主菜单背景图片
 * @parent ---主菜单---
 * @desc 选择主菜单背景图片
 * @default 
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param moveMenuBackGround
 * @text 主菜单背景移动图片
 * @parent ---主菜单---
 * @desc 选择主菜单背景可移动图片
 * @default
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param moveMenuBackGroundX
 * @text 移动方向X
 * @parent ---主菜单---
 * @desc 设置背景X方向移动速度
 * 默认：0为不移动 X正向右  X负向左
 * @default 0
 * @type float
 * 
 * @param moveMenuBackGroundY
 * @text 移动方向Y
 * @parent ---主菜单---
 * @desc 设置背景Y方向移动速度
 * 默认：0为不移动 Y正向下  Y负向上
 * @default 0
 * @type float
 * 
 * @param ---道具---
 * @default
 * 
 * @param itemButton
 * @text 道具按钮图片
 * @parent ---道具---
 * @desc 选择道具按钮图片
 * @default 
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param itemButtonX
 * @text 道具按钮图片X坐标
 * @parent ---道具---
 * @desc 设置道具按钮图片X坐标
 * 默认：左上角为0
 * @default 0
 * @type number
 * 
 * @param itemButtonY
 * @text 道具按钮图片Y坐标
 * @parent ---道具---
 * @desc 设置道具按钮图片Y坐标
 * 默认：左上角为0
 * @default 0
 * @type number
 * 
 * @param itemButtonId
 * @text 道具图片光标顺序（键盘模式）
 * @parent ---道具---
 * @desc 道具图片光标顺序（键盘模式）
 * 默认：0 （0是1号位置）
 * @default 0
 * @type number
 * 
 * @param ---装备---
 * @default
 * 
 * @param equipButton
 * @text 装备按钮图片
 * @parent ---装备---
 * @desc 选择道具按钮图片
 * @default 
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param equipButtonX
 * @text 装备按钮图片X坐标
 * @parent ---装备---
 * @desc 设置装备按钮图片X坐标
 * 默认：左上角为0
 * @default 200
 * @type number
 *
 * @param equipButtonY
 * @text 装备按钮图片Y坐标
 * @parent ---装备---
 * @desc 设置装备按钮图片Y坐标
 * 默认：左上角为0
 * @default 50
 * @type number
 * 
 * @param equipButtonId
 * @text 装备图片光标顺序（键盘模式）
 * @parent ---装备---
 * @desc 装备图片光标顺序（键盘模式）
 * 默认：1 （1是2号位置）
 * @default 1
 * @type number
 * 
 * @param ---技能---
 * @default
 * 
 * @param skillButton
 * @text 技能按钮图片
 * @parent ---技能---
 * @desc 选择技能按钮图片
 * @default 
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param skillButtonX
 * @text 技能按钮图片X坐标
 * @parent ---技能---
 * @desc 设置技能按钮图片X坐标
 * 默认：左上角为0
 * @default 0
 * @type number
 *
 * @param skillButtonY
 * @text 技能按钮图片Y坐标
 * @parent ---技能---
 * @desc 设置技能按钮图片Y坐标
 * 默认：左上角为0
 * @default 100
 * @type number
 * 
 * @param skillButtonId
 * @text 技能图片光标顺序（键盘模式）
 * @parent ---技能---
 * @desc 技能图片光标顺序（键盘模式）
 * 默认：2 （2是3号位置）
 * @default 2
 * @type number
 * 
 * @param ---状态---
 * @default
 * 
 * @param statusButton
 * @text 状态按钮图片
 * @parent ---状态---
 * @desc 选择状态按钮图片
 * @default 
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param statusButtonX
 * @text 状态按钮图片X坐标
 * @parent ---状态---
 * @desc 设置状态按钮图片X坐标
 * 默认：左上角为0
 * @default 200
 * @type number
 *
 * @param statusButtonY
 * @text 状态按钮图片Y坐标
 * @parent ---状态---
 * @desc 设置状态按钮图片Y坐标
 * 默认：左上角为0
 * @default 150
 * @type number
 * 
 * @param statusButtonId
 * @text 状态图片光标顺序（键盘模式）
 * @parent ---状态---
 * @desc 状态图片光标顺序（键盘模式）
 * 默认：3 （3是4号位置）
 * @default 3
 * @type number
 * 
 * @param ---整队---
 * @default
 * 
 * @param formationButton
 * @text 整队按钮图片
 * @parent ---整队---
 * @desc 选择整队按钮图片
 * @default 
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param formationButtonX
 * @text 整队按钮图片X坐标
 * @parent ---整队---
 * @desc 设置整队按钮图片X坐标
 * 默认：左上角为0
 * @default 0
 * @type number
 *
 * @param formationButtonY
 * @text 整队按钮图片Y坐标
 * @parent ---整队---
 * @desc 设置整队按钮图片Y坐标
 * 默认：左上角为0
 * @default 200
 * @type number
 * 
 * @param formationButtonId
 * @text 整队图片光标顺序（键盘模式）
 * @parent ---整队---
 * @desc 整队图片光标顺序（键盘模式）
 * 默认：4 （4是5号位置）
 * @default 4
 * @type number
 * 
 * @param ---设置---
 * @default
 * 
 * @param optionsButton
 * @text 设置按钮图片
 * @parent ---设置---
 * @desc 选择设置按钮图片
 * @default 
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param optionsButtonX
 * @text 设置按钮图片X坐标
 * @parent ---设置---
 * @desc 设置设置按钮图片X坐标
 * 默认：左上角为0
 * @default 200
 * @type number
 *
 * @param optionsButtonY
 * @text 设置按钮图片Y坐标
 * @parent ---设置---
 * @desc 设置设置按钮图片Y坐标
 * 默认：左上角为0
 * @default 250
 * @type number
 * 
 * @param optionsButtonId
 * @text 设置图片光标顺序（键盘模式）
 * @parent ---设置---
 * @desc 设置图片光标顺序（键盘模式）
 * 默认：5 （5是6号位置）
 * @default 5
 * @type number
 * 
 * @param ---存档---
 * @default
 * 
 * @param saveButton
 * @text 存档按钮图片
 * @parent ---存档---
 * @desc 选择存档按钮图片
 * @default 
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param saveButtonX
 * @text 设置存档图片X坐标
 * @parent ---存档---
 * @desc 设置存档按钮图片X坐标
 * 默认：左上角为0
 * @default 0
 * @type number
 *
 * @param saveButtonY
 * @text 设置存档图片Y坐标
 * @parent ---存档---
 * @desc 设置存档按钮图片Y坐标
 * 默认：左上角为0
 * @default 300
 * @type number
 * 
 * @param saveButtonId
 * @text 存档图片光标顺序（键盘模式）
 * @parent ---存档---
 * @desc 存档图片光标顺序（键盘模式）
 * 默认：6 （6是7号位置）
 * @default 6
 * @type number
 * 
 * @param ---游戏结束---
 * @default
 * 
 * @param gameEndButton
 * @text 游戏结束按钮图片
 * @parent ---游戏结束---
 * @desc 选择游戏结束按钮图片
 * @default 
 * @require 1
 * @dir img/menu/
 * @type file
 * 
 * @param gameEndButtonX
 * @text 设置游戏结束图片X坐标
 * @parent ---游戏结束---
 * @desc 设置游戏结束按钮图片X坐标
 * 默认：左上角为0
 * @default 200
 * @type number
 *
 * @param gameEndButtonY
 * @text 设置游戏结束图片Y坐标
 * @parent ---游戏结束---
 * @desc 设置游戏结束按钮图片Y坐标
 * 默认：左上角为0
 * @default 350
 * @type number
 * 
 * @param gameEndButtonId
 * @text 游戏结束图片光标顺序（键盘模式）
 * @parent ---游戏结束---
 * @desc 游戏结束图片光标顺序（键盘模式）
 * 默认：7 （7是8号位置）
 * @default 7
 * @type number
 *
 * @param ---自定义---
 * @default
 * 
 * @param custom
 * @text 自定义选项
 * @parent ---自定义---
 * @type struct<scenename>[]
 * @default 
 * 
 * @help
 * ==============================使用说明==================================
 * 所有图片均放入img/menu/下
 * 主菜单显示立绘、半身像、头像，不设置则不显示
 * 角色备注栏备注：<picture:图片名>  
 * 范例：<picture:Actor1_1>
 * 职业备注栏备注：<color:X> 可改变职业颜色
 * 插件设置比较多，为了完全自由度，做了很大修改，不设置大部分
 * 不会报错，会自动判断，有问题请及时联系作者QQ：903516931
 * 或者进入QQ群：881519208 交流讨论
 * ============================== 注 意 =================================
 * 如果关闭自动光标排序（键盘模式），即开启手动排序功能，手动功能下需要注意
 * 开启的所有选项图片的ID顺序，开启多少按照从0开始进行写入,不写入按照默认值
 * 进行，可能会产生BUG。
 * ============================== 日 志==================================
 * 2020.09.21 
 * 1>完成自定义图片按钮,自由设定位置 
 * 2>鼠标键盘操作逻辑 
 * 3>背景动态背景设置 
 * 4>自由设定图片按键顺序
 * 5>自定义图片按钮及接口
 * 2020.09.22 
 * 1>立绘超过大小自动缩放 
 * 2>完善鼠标键盘操作逻辑
 * 2020.09.23
 * 1>增加立绘背景，可自动缩放，也可手动调节功能
 * 2>增加角色窗口调节功能
 * 3>增加角色名字、职业、等级、状态图标调节功能
 * 4>增加血条蓝条替换调节功能
 * 2020.09.24
 * 1>修复角色数值重复绘制问题
 * 2>修复角色职业未定义颜色报错问题
 * 2020.09.25
 * 1>修复无法存档问题
 * =======================================================================
 * 1.承接MV、MZ定制插件  QQ：903516931
 */
/*~struct~scenename:
@param scene
@text 场景
@type string

@param fileName
@text 图片名称
@require 1
@dir img/menu/
@type file

@param fileNameX
@text 图片X坐标
@type number

@param fileNameY    
@text 图片Y坐标
@type number

@param sceneId
@text 图片光标顺序（键盘模式）
@type number
*/
'use strict';
var Imported = Imported || {};
Imported.FlyCat_MainMenu = true;

var FlyCat = FlyCat || {};
FlyCat.MainMenu = {};
FlyCat.MainMenu.parameters = PluginManager.parameters('FlyCat_MainMenu');
FlyCat.MainMenu.actorPicture = FlyCat.MainMenu.parameters['actorPicture'] === 'true';
FlyCat.MainMenu.actorValueSwitch = FlyCat.MainMenu.parameters['actorValueSwitch'] === 'true';
FlyCat.MainMenu.actorLabelSwitch = FlyCat.MainMenu.parameters['actorLabelSwitch'] === 'true';
FlyCat.MainMenu.autoSort = FlyCat.MainMenu.parameters['autoSort'] === 'true';
FlyCat.MainMenu.autoScale = FlyCat.MainMenu.parameters['autoScale'] === 'true';
FlyCat.MainMenu.actorLabelColor = FlyCat.MainMenu.parameters['actorLabelColor'] || 14;
FlyCat.MainMenu.actorLabelFontSize = FlyCat.MainMenu.parameters['actorLabelFontSize'] || 16;
FlyCat.MainMenu.actorValueFontSize = FlyCat.MainMenu.parameters['actorValueFontSize'] || 14;
FlyCat.MainMenu.actorValueString = FlyCat.MainMenu.parameters['actorValueString'] || "/";
FlyCat.MainMenu.actorHpBimapX = Number(FlyCat.MainMenu.parameters['actorHpBimapX'] || -340);
FlyCat.MainMenu.actorHpBimapY = Number(FlyCat.MainMenu.parameters['actorHpBimapY'] || 150);
FlyCat.MainMenu.actorHpPicture = FlyCat.MainMenu.parameters['actorHpPicture'];
FlyCat.MainMenu.actorHpPictureX = Number(FlyCat.MainMenu.parameters['actorHpPictureX'] || 0);
FlyCat.MainMenu.actorHpPictureY = Number(FlyCat.MainMenu.parameters['actorHpPictureY'] || 0);
FlyCat.MainMenu.actorMpPicture = FlyCat.MainMenu.parameters['actorMpPicture'];
FlyCat.MainMenu.actorMpPictureX = Number(FlyCat.MainMenu.parameters['actorMpPictureX'] || 0);
FlyCat.MainMenu.actorMpPictureY = Number(FlyCat.MainMenu.parameters['actorMpPictureY'] || 0);
FlyCat.MainMenu.actorTpPicture = FlyCat.MainMenu.parameters['actorTpPicture'];
FlyCat.MainMenu.actorTpPictureX = Number(FlyCat.MainMenu.parameters['actorTpPictureX'] || 0);
FlyCat.MainMenu.actorTpPictureY = Number(FlyCat.MainMenu.parameters['actorTpPictureY'] || 0);
FlyCat.MainMenu.actorValueWidth = Number(FlyCat.MainMenu.parameters['actorValueWidth'] || 100);
FlyCat.MainMenu.actorValueHeight = Number(FlyCat.MainMenu.parameters['actorValueHeight'] || 0);
FlyCat.MainMenu.actorHpValueX = Number(FlyCat.MainMenu.parameters['actorHpValueX'] || 100);
FlyCat.MainMenu.actorHpValueY = Number(FlyCat.MainMenu.parameters['actorHpValueY'] || -5);
FlyCat.MainMenu.actorMpValueX = Number(FlyCat.MainMenu.parameters['actorMpValueX'] || 100);
FlyCat.MainMenu.actorMpValueY = Number(FlyCat.MainMenu.parameters['actorMpValueY'] || -5);
FlyCat.MainMenu.actorTpValueX = Number(FlyCat.MainMenu.parameters['actorTpValueX'] || 100);
FlyCat.MainMenu.actorTpValueY = Number(FlyCat.MainMenu.parameters['actorTpValueY'] || -5);
FlyCat.MainMenu.actorHpLabelX = Number(FlyCat.MainMenu.parameters['actorHpLabelX'] || 0);
FlyCat.MainMenu.actorHpLabelY = Number(FlyCat.MainMenu.parameters['actorHpLabelY'] || 0);
FlyCat.MainMenu.actorMpLabelX = Number(FlyCat.MainMenu.parameters['actorMpLabelX'] || 0);
FlyCat.MainMenu.actorMpLabelY = Number(FlyCat.MainMenu.parameters['actorMpLabelY'] || 0);
FlyCat.MainMenu.actorTpLabelX = Number(FlyCat.MainMenu.parameters['actorTpLabelX'] || 0);
FlyCat.MainMenu.actorTpLabelY = Number(FlyCat.MainMenu.parameters['actorTpLabelY'] || 0);
FlyCat.MainMenu.fontSize = Number(FlyCat.MainMenu.parameters['fontSize'] || 14);
FlyCat.MainMenu.fontNameSize = Number(FlyCat.MainMenu.parameters['fontNameSize'] || 20);
FlyCat.MainMenu.nameX = Number(FlyCat.MainMenu.parameters['nameX'] || -170);
FlyCat.MainMenu.nameY = Number(FlyCat.MainMenu.parameters['nameY'] || -250);
FlyCat.MainMenu.classNameSize = Number(FlyCat.MainMenu.parameters['classNameSize'] || 14);
FlyCat.MainMenu.classNameX = Number(FlyCat.MainMenu.parameters['classNameX'] || -350);
FlyCat.MainMenu.classNameY = Number(FlyCat.MainMenu.parameters['classNameY'] || -230);
FlyCat.MainMenu.levelTextSize = Number(FlyCat.MainMenu.parameters['levelTextSize'] || 14);
FlyCat.MainMenu.levelTextColor = Number(FlyCat.MainMenu.parameters['levelTextColor'] || 3);
FlyCat.MainMenu.levelTextX = Number(FlyCat.MainMenu.parameters['levelTextX'] || -170);
FlyCat.MainMenu.levelTextY = Number(FlyCat.MainMenu.parameters['levelTextY'] || 40);
FlyCat.MainMenu.levelSize = Number(FlyCat.MainMenu.parameters['levelSize'] || 14);
FlyCat.MainMenu.levelColor = Number(FlyCat.MainMenu.parameters['levelColor'] || 14);
FlyCat.MainMenu.levelX = Number(FlyCat.MainMenu.parameters['levelX'] || -160);
FlyCat.MainMenu.levelY = Number(FlyCat.MainMenu.parameters['levelY'] || 40);
FlyCat.MainMenu.actorStatusIconColspacing = Number(FlyCat.MainMenu.parameters['actorStatusIconColspacing'] || 0);
FlyCat.MainMenu.actorStatusIconX = Number(FlyCat.MainMenu.parameters['actorStatusIconX'] || -170);
FlyCat.MainMenu.actorStatusIconY = Number(FlyCat.MainMenu.parameters['actorStatusIconY'] || 50);
FlyCat.MainMenu.scaleWidth = FlyCat.MainMenu.parameters['scaleWidth'] || this.width / this.maxCols();
FlyCat.MainMenu.scaleHeight = FlyCat.MainMenu.parameters['scaleHeight'] || this.itemHeight();
FlyCat.MainMenu.actorPictureX = Number(FlyCat.MainMenu.parameters['actorPictureX'] || 0);
FlyCat.MainMenu.actorPictureY = Number(FlyCat.MainMenu.parameters['actorPictureY'] || 0);
FlyCat.MainMenu.actorMenuBackGround = FlyCat.MainMenu.parameters['actorMenuBackGround'];
FlyCat.MainMenu.actorMenuCols = FlyCat.MainMenu.parameters['actorMenuCols'] || 4;
FlyCat.MainMenu.actorMenuRows = FlyCat.MainMenu.parameters['actorMenuRows'] || 1;
FlyCat.MainMenu.actorMenuColSpacing = FlyCat.MainMenu.parameters['actorMenuColSpacing'] || 5;
FlyCat.MainMenu.actorMenuRowSpacing = FlyCat.MainMenu.parameters['actorMenuRowSpacing'] || 4;
FlyCat.MainMenu.actorMenuWidth = FlyCat.MainMenu.parameters['actorMenuWidth'] || Graphics.width;
FlyCat.MainMenu.actorMenuHeight = FlyCat.MainMenu.parameters['actorMenuHeight'] || Graphics.height;
FlyCat.MainMenu.actorMenuX = FlyCat.MainMenu.parameters['actorMenuX'] || 0;
FlyCat.MainMenu.actorMenuY = FlyCat.MainMenu.parameters['actorMenuY'] || 0;
FlyCat.MainMenu.cursorColor = eval(FlyCat.MainMenu.parameters['cursorColor']) || [50, 50, 50, 0];
FlyCat.MainMenu.menuBackGround = FlyCat.MainMenu.parameters['menuBackGround'];
FlyCat.MainMenu.moveMenuBackGround = FlyCat.MainMenu.parameters['moveMenuBackGround'];
FlyCat.MainMenu.moveMenuBackGroundX = FlyCat.MainMenu.parameters['moveMenuBackGroundX'] || 0;
FlyCat.MainMenu.moveMenuBackGroundY = FlyCat.MainMenu.parameters['moveMenuBackGroundY'] || 0;
FlyCat.MainMenu.itemButton = FlyCat.MainMenu.parameters['itemButton'];
FlyCat.MainMenu.itemButtonX = FlyCat.MainMenu.parameters['itemButtonX'] || 0;
FlyCat.MainMenu.itemButtonY = FlyCat.MainMenu.parameters['itemButtonY'] || 0;
FlyCat.MainMenu.itemButtonId = FlyCat.MainMenu.parameters['itemButtonId'] || 0;
FlyCat.MainMenu.equipButton = FlyCat.MainMenu.parameters['equipButton'];
FlyCat.MainMenu.equipButtonX = FlyCat.MainMenu.parameters['equipButtonX'] || 200;
FlyCat.MainMenu.equipButtonY = FlyCat.MainMenu.parameters['equipButtonY'] || 50;
FlyCat.MainMenu.equipButtonId = FlyCat.MainMenu.parameters['equipButtonId'] || 1;
FlyCat.MainMenu.skillButton = FlyCat.MainMenu.parameters['skillButton'];
FlyCat.MainMenu.skillButtonX = FlyCat.MainMenu.parameters['skillButtonX'] || 0;
FlyCat.MainMenu.skillButtonY = FlyCat.MainMenu.parameters['skillButtonY'] || 100;
FlyCat.MainMenu.skillButtonId = FlyCat.MainMenu.parameters['skillButtonId'] || 2;
FlyCat.MainMenu.statusButton = FlyCat.MainMenu.parameters['statusButton'];
FlyCat.MainMenu.statusButtonX = FlyCat.MainMenu.parameters['statusButtonX'] || 200;
FlyCat.MainMenu.statusButtonY = FlyCat.MainMenu.parameters['statusButtonY'] || 150;
FlyCat.MainMenu.statusButtonId = FlyCat.MainMenu.parameters['statusButtonId'] || 3;
FlyCat.MainMenu.formationButton = FlyCat.MainMenu.parameters['formationButton'];
FlyCat.MainMenu.formationButtonX = FlyCat.MainMenu.parameters['formationButtonX'] || 0;
FlyCat.MainMenu.formationButtonY = FlyCat.MainMenu.parameters['formationButtonY'] || 200;
FlyCat.MainMenu.formationButtonId = FlyCat.MainMenu.parameters['formationButtonId'] || 4;
FlyCat.MainMenu.optionsButton = FlyCat.MainMenu.parameters['optionsButton'];
FlyCat.MainMenu.optionsButtonX = FlyCat.MainMenu.parameters['optionsButtonX'] || 200;
FlyCat.MainMenu.optionsButtonY = FlyCat.MainMenu.parameters['optionsButtonY'] || 250;
FlyCat.MainMenu.optionsButtonId = FlyCat.MainMenu.parameters['optionsButtonId'] || 5;
FlyCat.MainMenu.saveButton = FlyCat.MainMenu.parameters['saveButton'];
FlyCat.MainMenu.saveButtonX = FlyCat.MainMenu.parameters['saveButtonX'] || 0;
FlyCat.MainMenu.saveButtonY = FlyCat.MainMenu.parameters['saveButtonY'] || 300;
FlyCat.MainMenu.saveButtonId = FlyCat.MainMenu.parameters['saveButtonId'] || 6;
FlyCat.MainMenu.gameEndButton = FlyCat.MainMenu.parameters['gameEndButton'];
FlyCat.MainMenu.gameEndButtonX = FlyCat.MainMenu.parameters['gameEndButtonX'] || 200;
FlyCat.MainMenu.gameEndButtonY = FlyCat.MainMenu.parameters['gameEndButtonY'] || 350;
FlyCat.MainMenu.gameEndButtonId = FlyCat.MainMenu.parameters['gameEndButtonId'] || 7;
FlyCat.MainMenu.sceneName = JSON.parse(FlyCat.MainMenu.parameters['custom'] || '[]');
if (FlyCat.MainMenu.sceneName) {
    const max = FlyCat.MainMenu.sceneName.length;
    for (let i = 0; i < max; i++) {
        FlyCat.MainMenu.sceneName[i] = JSON.parse(FlyCat.MainMenu.sceneName[i])
    }
};
var _Scene_MainMenu = null;
FlyCat.MainMenu.Scene_Menu_initialize = Scene_Menu.prototype.initialize;
Scene_Menu.prototype.initialize = function () {
    FlyCat.MainMenu.Scene_Menu_initialize.call(this);
    $gameTemp._pictureButton = [];
    $gameTemp._sceneName = [];
    $gameTemp._buttonName = null;
    this._inputCursor = 0;
    this._custom = null;
    this._custom = new Array();
    this._customButton = [];
    $gameTemp._pressButton = null;
    this._selectType = null;
    if (FlyCat.MainMenu.menuBackGround) { ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.menuBackGround); }
    if (FlyCat.MainMenu.moveMenuBackGround) { ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.moveMenuBackGround); }
    if (FlyCat.MainMenu.itemButton) { ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.itemButton); }
    if (FlyCat.MainMenu.equipButton) { ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.equipButton); }
    if (FlyCat.MainMenu.statusButton) { ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.statusButton); }
    if (FlyCat.MainMenu.formationButton) { ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.formationButton); }
    if (FlyCat.MainMenu.optionsButton) { ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.optionsButton); }
    if (FlyCat.MainMenu.saveButton) { ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.saveButton); }
    if (FlyCat.MainMenu.gameEndButton) { ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.gameEndButton); }
    if (FlyCat.MainMenu.sceneName) {
        for (let i = 0; i < FlyCat.MainMenu.sceneName.length; i++) {
            ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.sceneName[i].fileName);
        }
    }
    _Scene_MainMenu = this;
};
Scene_Menu.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
    this.createStatusWindow();
    this.createItemButton();
    this.createEquipButton();
    this.createSkillButton();
    this.createStatusButton();
    this.createFormationButton();
    this.createOptionsButton();
    this.createSaveButton();
    this.createGameEndButton();
    this.createCustomButton();
    // this.createGoldWindow();
};
Scene_Menu.prototype.createCommandWindow = function () {
    const rect = this.commandWindowRect();
    const commandWindow = new Window_MenuCommand(rect);
    // commandWindow.setHandler("save", this.commandSave.bind(this));
    commandWindow.setHandler("cancel", this.popScene.bind(this));
    this.addWindow(commandWindow);
    this._commandWindow = commandWindow;
};
Scene_Menu.prototype.createStatusWindow = function () {
    const rect = this.statusWindowRect();
    this._statusWindow = new Window_MenuStatus(rect);
    this.addWindow(this._statusWindow);
    this._statusWindow.x = eval(FlyCat.MainMenu.actorMenuX);
    this._statusWindow.y = eval(FlyCat.MainMenu.actorMenuY);
    // console.log(this._statusWindow)
};
Scene_Menu.prototype.statusWindowRect = function () {
    const ww = eval(FlyCat.MainMenu.actorMenuWidth);//- this.mainCommandWidth();
    const wh = eval(FlyCat.MainMenu.actorMenuHeight);//this.mainAreaHeight();
    const wx = 0;
    const wy = 0;
    return new Rectangle(wx, wy, ww, wh);
};
Scene_Menu.prototype.scaleSprite = function (sprite, width, height) {
    const ratioX = width / sprite.bitmap.width;
    const ratioY = height / sprite.bitmap.height;
    const scale = Math.max(ratioX, ratioY, 1.0);
    sprite.scale.x = scale;
    sprite.scale.y = scale;
};
Scene_Menu.prototype.createCustomButton = function () {
    if (FlyCat.MainMenu.sceneName) {
        this._customButton = FlyCat.MainMenu.sceneName;
        if (this._customButton) {
            for (let i = 0; i < this._customButton.length; i++) {
                var customName = this._customButton[i].fileName;
                this._custom[i] = new Sprite_menuButton();
                this._custom[i].x = this._customButton[i].fileNameX;
                this._custom[i].y = this._customButton[i].fileNameY;;
                this.addChild(this._custom[i]);
                this._custom[i].bitmap = ImageManager.loadBitmap('img/menu/', customName);
                this._custom[i].nameMenu(customName);
                this._custom[i].setClickHandler(this.commandCustom.bind(this));
                if (FlyCat.MainMenu.autoSort) {
                    $gameTemp._pictureButton.push(this._custom[i]);
                }
                else {
                    $gameTemp._pictureButton[this._customButton[i].sceneId] = this._custom[i];
                }


            }
        }
    }
};

Scene_Menu.prototype.commandCustom = function () {
    var scene = null;
    if ($gameTemp._buttonName) {
        for (let i = 0; i < this._customButton.length; i++) {
            if (this._customButton[i].fileName === $gameTemp._buttonName) {
                var scene = eval(this._customButton[i].scene);
            }
        }
        if (scene) {
            SoundManager.playOk();
            SceneManager.push(scene);
        }
    }
};




Scene_Menu.prototype.createItemButton = function () {
    if (FlyCat.MainMenu.itemButton) {
        if (this._itemButton) {
            this.removeChild(this._itemButton);
            this._itemButton.destroy();
            this._itemButton = null;
        }
        this._itemButton = new Sprite_menuButton();
        this._itemButton.x = FlyCat.MainMenu.itemButtonX;
        this._itemButton.y = FlyCat.MainMenu.itemButtonY;
        this.addChild(this._itemButton);
        this._itemButton.nameMenu(FlyCat.MainMenu.itemButton);
        this._itemButton.bitmap = ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.itemButton);
        this._itemButton.setClickHandler(this.commandItem.bind(this));

        $gameTemp._sceneName.push('Scene_Item', this._itemButton._nameMenu);
        if (FlyCat.MainMenu.autoSort) {
            $gameTemp._pictureButton.push(this._itemButton);
        }
        else {
            $gameTemp._pictureButton[FlyCat.MainMenu.itemButtonId] = this._itemButton;
        }


    }
};

Scene_Menu.prototype.createEquipButton = function () {
    if (FlyCat.MainMenu.equipButton) {
        if (this._equipButton) {
            this.removeChild(this._equipButton);
            this._equipButton.destroy();
            this._equipButton = null;
        }
        this._equipButton = new Sprite_menuButton();
        this._equipButton.x = FlyCat.MainMenu.equipButtonX;
        this._equipButton.y = FlyCat.MainMenu.equipButtonY;
        this.addChild(this._equipButton);
        this._equipButton.nameMenu(FlyCat.MainMenu.equipButton);
        this._equipButton.bitmap = ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.equipButton);
        this._selectType = "equip";
        this._equipButton.setClickHandler(this.commandPersonal.bind(this));

        $gameTemp._sceneName.push('Scene_Equip', this._equipButton._nameMenu);
        if (FlyCat.MainMenu.autoSort) {
            $gameTemp._pictureButton.push(this._equipButton);
        }
        else {
            $gameTemp._pictureButton[FlyCat.MainMenu.equipButtonId] = this._equipButton;
        }

    }
};

Scene_Menu.prototype.createSkillButton = function () {
    if (FlyCat.MainMenu.skillButton) {
        if (this._skillButton) {
            this.removeChild(this._skillButton);
            this._skillButton.destroy();
            this._skillButton = null;
        }
        this._skillButton = new Sprite_menuButton();
        this._skillButton.x = FlyCat.MainMenu.skillButtonX;
        this._skillButton.y = FlyCat.MainMenu.skillButtonY;
        this.addChild(this._skillButton);
        this._skillButton.nameMenu(FlyCat.MainMenu.skillButton);
        this._skillButton.bitmap = ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.skillButton);
        this._selectType = "skill";
        this._skillButton.setClickHandler(this.commandPersonal.bind(this));

        $gameTemp._sceneName.push('Scene_Skill', this._skillButton._nameMenu);
        if (FlyCat.MainMenu.autoSort) {
            $gameTemp._pictureButton.push(this._skillButton);
        }
        else {
            $gameTemp._pictureButton[FlyCat.MainMenu.skillButtonId] = this._skillButton;
        }

    }
};

Scene_Menu.prototype.createStatusButton = function () {
    if (FlyCat.MainMenu.statusButton) {
        if (this._statusButton) {
            this.removeChild(this._statusButton);
            this._statusButton.destroy();
            this._statusButton = null;
        }
        this._statusButton = new Sprite_menuButton();
        this._statusButton.x = FlyCat.MainMenu.statusButtonX;
        this._statusButton.y = FlyCat.MainMenu.statusButtonY;
        this.addChild(this._statusButton);
        this._statusButton.nameMenu(FlyCat.MainMenu.statusButton);
        this._statusButton.bitmap = ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.statusButton);
        this._selectType = "status";
        this._statusButton.setClickHandler(this.commandPersonal.bind(this));

        $gameTemp._sceneName.push('Scene_Status', this._statusButton._nameMenu);
        if (FlyCat.MainMenu.autoSort) {
            $gameTemp._pictureButton.push(this._statusButton);
        }
        else {
            $gameTemp._pictureButton[FlyCat.MainMenu.statusButtonId] = this._statusButton;
        }

    }
};

Scene_Menu.prototype.createFormationButton = function () {
    if (FlyCat.MainMenu.formationButton) {
        if (this._formationButton) {
            this.removeChild(this._formationButton);
            this._formationButton.destroy();
            this._formationButton = null;
        }
        this._formationButton = new Sprite_menuButton();
        this._formationButton.x = FlyCat.MainMenu.formationButtonX;
        this._formationButton.y = FlyCat.MainMenu.formationButtonY;
        this.addChild(this._formationButton);
        this._formationButton.nameMenu(FlyCat.MainMenu.formationButton);
        this._formationButton.bitmap = ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.formationButton);
        this._formationButton.setClickHandler(this.commandFormation.bind(this));

        $gameTemp._sceneName.push('formation', this._formationButton._nameMenu);
        if (FlyCat.MainMenu.autoSort) {
            $gameTemp._pictureButton.push(this._formationButton);
        }
        else {
            $gameTemp._pictureButton[FlyCat.MainMenu.formationButtonId] = this._formationButton;
        }

    }
};

Scene_Menu.prototype.createOptionsButton = function () {
    if (FlyCat.MainMenu.optionsButton) {
        if (this._optionsButton) {
            this.removeChild(this._optionsButton);
            this._optionsButton.destroy();
            this._optionsButton = null;
        }
        this._optionsButton = new Sprite_menuButton();
        this._optionsButton.x = FlyCat.MainMenu.optionsButtonX;
        this._optionsButton.y = FlyCat.MainMenu.optionsButtonY;
        this.addChild(this._optionsButton);
        this._optionsButton.nameMenu(FlyCat.MainMenu.optionsButton);
        this._optionsButton.bitmap = ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.optionsButton);
        this._optionsButton.setClickHandler(this.commandOptions.bind(this));

        $gameTemp._sceneName.push('Scene_Options', this._optionsButton._nameMenu);
        if (FlyCat.MainMenu.autoSort) {
            $gameTemp._pictureButton.push(this._optionsButton);
        }
        else {
            $gameTemp._pictureButton[FlyCat.MainMenu.optionsButtonId] = this._optionsButton;
        }

    }
};

Scene_Menu.prototype.createSaveButton = function () {
    if (FlyCat.MainMenu.saveButton) {
        if (this._saveButton) {
            this.removeChild(this._saveButton);
            this._saveButton.destroy();
            this._saveButton = null;
        }
        this._saveButton = new Sprite_menuButton();
        this._saveButton.x = FlyCat.MainMenu.saveButtonX;
        this._saveButton.y = FlyCat.MainMenu.saveButtonY;
        this.addChild(this._saveButton);
        this._saveButton.nameMenu(FlyCat.MainMenu.saveButton);
        this._saveButton.bitmap = ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.saveButton);
        this._saveButton.setClickHandler(this.commandSave.bind(this));

        $gameTemp._sceneName.push('Scene_Save', this._saveButton._nameMenu);
        if (FlyCat.MainMenu.autoSort) {
            $gameTemp._pictureButton.push(this._saveButton);
        }
        else {
            $gameTemp._pictureButton[FlyCat.MainMenu.saveButtonId] = this._saveButton;
        }

    }
};

Scene_Menu.prototype.createGameEndButton = function () {
    if (FlyCat.MainMenu.gameEndButton) {
        if (this._gameEndButton) {
            this.removeChild(this._gameEndButton);
            this._gameEndButton.destroy();
            this._gameEndButton = null;
        }
        this._gameEndButton = new Sprite_menuButton();
        this._gameEndButton.x = FlyCat.MainMenu.gameEndButtonX;
        this._gameEndButton.y = FlyCat.MainMenu.gameEndButtonY;
        this.addChild(this._gameEndButton);
        this._gameEndButton.nameMenu(FlyCat.MainMenu.gameEndButton);
        this._gameEndButton.bitmap = ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.gameEndButton);
        this._gameEndButton.setClickHandler(this.commandGameEnd.bind(this));
        $gameTemp._sceneName.push('Scene_GameEnd', this._gameEndButton._nameMenu);
        if (FlyCat.MainMenu.autoSort) {
            $gameTemp._pictureButton.push(this._gameEndButton);
        }
        else {
            $gameTemp._pictureButton[FlyCat.MainMenu.gameEndButtonId] = this._gameEndButton;
        }

    }
};
Scene_Menu.prototype.commandPersonal = function () {
    ///  console.log($gameTemp._buttonName)
    // console.log($gameTemp._sceneName)
    if ($gameTemp._buttonName) {
        for (let i = 0; i < $gameTemp._sceneName.length; i++) {
            if ($gameTemp._buttonName === $gameTemp._sceneName[i]) {
                var specialScene = $gameTemp._sceneName[i - 1];
                if (specialScene === 'Scene_Skill') { this._selectType = "skill" };
                if (specialScene === 'Scene_Equip') { this._selectType = "equip" };
                if (specialScene === 'Scene_Status') { this._selectType = "status" };
            }
        }
    }

    this._inputCursor = 1;
    SoundManager.playOk();
    this._commandWindow.deactivate();
    this._statusWindow.setFormationMode(false);
    this._statusWindow.selectLast();
    this._statusWindow.activate();
    this._statusWindow.setHandler("ok", this.onPersonalOk.bind(this));
    this._statusWindow.setHandler("cancel", this.onPersonalCancel.bind(this));
};
Scene_Menu.prototype.onPersonalOk = function () {
    this._inputCursor = 0;
    $gameTemp._buttonName = null;
    switch (this._selectType) {
        case "skill":
            SceneManager.push(Scene_Skill);
            break;
        case "equip":
            SceneManager.push(Scene_Equip);
            break;
        case "status":
            SceneManager.push(Scene_Status);
            break;
    }
};
Scene_Menu.prototype.onPersonalCancel = function () {
    //  this._statusWindow.hide();
    this._inputCursor = 0;
    this._statusWindow.deselect();
    this._commandWindow.activate();
};
Scene_Menu.prototype.commandFormation = function () {
    this._inputCursor = 1;
    this._statusWindow.setFormationMode(true);
    this._statusWindow.selectLast();
    this._commandWindow.deactivate();
    // this._statusWindow.show();
    this._statusWindow.activate();
    this._statusWindow.setHandler("ok", this.onFormationOk.bind(this));
    this._statusWindow.setHandler("cancel", this.onFormationCancel.bind(this));
};
Scene_Menu.prototype.onFormationCancel = function () {
    //  this._statusWindow.hide();
    if (this._statusWindow.pendingIndex() >= 0) {
        this._statusWindow.setPendingIndex(-1);
        this._statusWindow.activate();
    } else {
        this._statusWindow.deselect();
        this._commandWindow.activate();
        this._inputCursor = 0;
    }
};
Scene_Menu.prototype.commandItem = function () {
    SoundManager.playOk();
    SceneManager.push(Scene_Item);
};
Scene_Menu.prototype.popScene = function () {
    SoundManager.playCancel();
    SceneManager.pop();
};
Scene_Menu.prototype.createBackground = function () {
    if (FlyCat.MainMenu.menuBackGround) {
        if (this._backGround) {
            this.removeChild(this._backGround);
            this._backGround.destroy();
            this._backGround = null;
        }
        this._backGround = new Sprite();
        this.addChild(this._backGround);
        this._backGround.bitmap = ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.menuBackGround);
        this.scaleSprite(this._backGround, Graphics.width, Graphics.height)
    }
    if (FlyCat.MainMenu.moveMenuBackGround) {
        if (this._moveBackGround) {
            this.removeChild(this._moveBackGround);
            this._moveBackGround.destroy();
            this._moveBackGround = null;
        }
        this._moveBackGround = new TilingSprite();
        this._moveBackGround.move(0, 0, Graphics.width, Graphics.height);
        this.addChild(this._moveBackGround);
        this._moveBackGround.bitmap = ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.moveMenuBackGround);
        this.scaleSprite(this._moveBackGround, Graphics.width, Graphics.height)
    }
}

FlyCat.MainMenu.Scene_Menu_update = Scene_Menu.prototype.update;
Scene_Menu.prototype.update = function () {
    FlyCat.MainMenu.Scene_Menu_update.call(this)

    if ($gameTemp._pictureButton.length > 0 && this._inputCursor == 0) {
        if (Input.isTriggered("right") || Input.isTriggered("down")) {
            $gameTemp._buttonName = null;
            //    this.pressButtonClear();
            this.rightButton();

        }
        if (Input.isTriggered("left") || Input.isTriggered("up")) {
            $gameTemp._buttonName = null;
            //  this.pressButtonClear();
            this.leftButton();

        }

        if ($gameTemp._pictureButton[$gameTemp._pressButton] && Input.isTriggered("ok")) {
            $gameTemp._buttonName = null;
            this.pressButtonInput();
        }
    }
    if (FlyCat.MainMenu.moveMenuBackGround) {
        this._moveBackGround.origin.x += Number(FlyCat.MainMenu.moveMenuBackGroundX);
        this._moveBackGround.origin.y += Number(FlyCat.MainMenu.moveMenuBackGroundY);
    }
}
Scene_Menu.prototype.pressButtonClear = function () {
    const length = $gameTemp._pictureButton.length;
    const list = $gameTemp._pictureButton;
    for (let index = 0; index < length; index++) {
        list[index]._colorTone = [0, 0, 0, 0];
    }

}
Scene_Menu.prototype.pressButtonInput = function () {
    var scene = null;
    for (let i = 0; i < $gameTemp._sceneName.length; i++) {
        if ($gameTemp._sceneName[i] === $gameTemp._pictureButton[$gameTemp._pressButton]._nameMenu) {
            var specialScene = $gameTemp._sceneName[i - 1];
            if (specialScene === 'formation') {
            }
            else {
                var scene = eval($gameTemp._sceneName[i - 1]);
            }

            break;
        }
    }
    if (!scene) {
        for (let i = 0; i < FlyCat.MainMenu.sceneName.length; i++) {
            if (FlyCat.MainMenu.sceneName[i].fileName === $gameTemp._pictureButton[$gameTemp._pressButton]._nameMenu) {
                var scene = eval(FlyCat.MainMenu.sceneName[i].scene);
            }
        }
    }
    if (specialScene === 'formation') {
        this.commandFormation()
    }
    else {

        if (specialScene === 'Scene_Skill' || specialScene === 'Scene_Equip' || specialScene === 'Scene_Status') {
            if (specialScene === 'Scene_Skill') { this._selectType = "skill" };
            if (specialScene === 'Scene_Equip') { this._selectType = "equip" };
            if (specialScene === 'Scene_Status') { this._selectType = "status" };
            this.commandPersonal();
        }
        else {
            if (scene) {
                SoundManager.playOk();
                SceneManager.push(scene);
            }
        }
    }
};
Scene_Menu.prototype.rightButton = function () {
    const pictureButton = $gameTemp._pictureButton;
    const prctureButtonLength = $gameTemp._pictureButton.length;
    if ($gameTemp._pressButton == null) {
        pictureButton[0]._colorTone = FlyCat.MainMenu.cursorColor;
        pictureButton[0]._updateColorFilter();
        SoundManager.playCursor();
        $gameTemp._pressButton = 0;
    }
    else if ($gameTemp._pressButton >= 0) {
        SoundManager.playCursor();
        $gameTemp._pressButton += 1;
        if ($gameTemp._pressButton == prctureButtonLength) {
            $gameTemp._pressButton = 0;
            pictureButton[prctureButtonLength - 1]._colorTone = [0, 0, 0, 0];
            pictureButton[prctureButtonLength - 1]._updateColorFilter();
        }
        else {
            pictureButton[$gameTemp._pressButton - 1]._colorTone = [0, 0, 0, 0];
            pictureButton[$gameTemp._pressButton - 1]._updateColorFilter();
        }

        pictureButton[$gameTemp._pressButton]._colorTone = FlyCat.MainMenu.cursorColor;
        pictureButton[$gameTemp._pressButton]._updateColorFilter();


    }
};

Scene_Menu.prototype.leftButton = function () {
    const pictureButton = $gameTemp._pictureButton;
    const prctureButtonLength = $gameTemp._pictureButton.length;
    if ($gameTemp._pressButton == null) {
        pictureButton[0]._colorTone = FlyCat.MainMenu.cursorColor;
        pictureButton[0]._updateColorFilter();
        SoundManager.playCursor();
        $gameTemp._pressButton = 0;
    }
    else if ($gameTemp._pressButton >= 0) {
        SoundManager.playCursor();
        $gameTemp._pressButton -= 1;
        if ($gameTemp._pressButton < 0) {
            $gameTemp._pressButton = prctureButtonLength - 1;
            pictureButton[0]._colorTone = [0, 0, 0, 0];
            pictureButton[0]._updateColorFilter();
        }
        else {
            pictureButton[$gameTemp._pressButton + 1]._colorTone = [0, 0, 0, 0];
            pictureButton[$gameTemp._pressButton + 1]._updateColorFilter();
        }
        pictureButton[$gameTemp._pressButton]._colorTone = FlyCat.MainMenu.cursorColor;
        pictureButton[$gameTemp._pressButton]._updateColorFilter();
    }
};

FlyCat.MainMenu.Window_MenuCommand_initialize = Window_MenuCommand.prototype.initialize;
Window_MenuCommand.prototype.initialize = function (rect) {
    FlyCat.MainMenu.Window_MenuCommand_initialize.call(this, rect);
    this.opacity = 0;
    this.deselect();
    // this.width = 0;
    // this.height = 0;
};
Window_MenuStatus.prototype.initialize = function (rect) {
    Window_StatusBase.prototype.initialize.call(this, rect);
    this._formationMode = false;
    this._pendingIndex = -1;
    this.opacity = 0;
    // this._actorMenuBackGround = new Sprite()
    // this.addChild(this._actorMenuBackGround)
    // this._actorPicture = new Sprite()
    // this.addChild(this._actorPicture)
    this.refresh();

};
Window_MenuCommand.prototype.makeCommandList = function () {

};
Window_MenuCommand.prototype.processOk = function () {

};
Window_MenuStatus.prototype.itemHeight = function () {
    return Math.floor(this.innerHeight / this.numVisibleRows());
};
Window_MenuStatus.prototype.itemWidth = function () {
    return Math.floor(this.innerWidth / this.maxCols());
};
Window_MenuStatus.prototype.numVisibleRows = function () {
    return FlyCat.MainMenu.actorMenuRows;
};
Window_MenuStatus.prototype.maxCols = function () {
    return FlyCat.MainMenu.actorMenuCols;
};
Window_MenuStatus.prototype.colSpacing = function () {
    return FlyCat.MainMenu.actorMenuColSpacing;
};
Window_MenuStatus.prototype.rowSpacing = function () {
    return FlyCat.MainMenu.actorMenuRowSpacing;
};


Window_MenuStatus.prototype.drawItemImage = function (index) {
    const actor = this.actor(index);
    const rect = this.itemRect(index);
    this.actorMeta(actor);
    if (this._menuActorMeta) {
        var picture = ImageManager.loadBitmap('img/menu/', this._menuActorMeta)//ImageManager.loadPicture(this._menuActorMeta)
        var width = picture.width;
        if (FlyCat.MainMenu.autoScale) {
            var height = picture.height;
        }
        else {
            var height = rect.height - 2;
        }
        this.drawPicture(this._menuActorMeta, rect.x + 1, rect.y + 1, width, height);
    }

};
Window_MenuStatus.prototype.drawPicture = function (
    faceName, x, y, width, height
) {
    const bitmap = ImageManager.loadBitmap('img/menu/', faceName)//ImageManager.loadPicture(faceName);
    const pw = bitmap.width;
    const ph = bitmap.height;
    const sw = Math.min(width, pw);
    const sh = Math.min(height, ph);
    const dx = Math.floor(x + Math.max(width - pw, 0) / 2) + FlyCat.MainMenu.actorPictureX;
    const dy = Math.floor(y + Math.max(height - ph, 0) / 2) + FlyCat.MainMenu.actorPictureY;
    const sx = 0;
    const sy = 0;
    if (FlyCat.MainMenu.autoScale) {
        var scw = pw > this.width / this.maxCols() ? pw * (this.width / this.maxCols() / pw) : pw;
        var sch = ph > this.itemHeight() ? ph * (this.itemHeight() / ph) : ph;
    }
    else {
        var scw = eval(FlyCat.MainMenu.scaleWidth);
        var sch = eval(FlyCat.MainMenu.scaleHeight);
    }
    this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy, scw - this.colSpacing(), sch - this.rowSpacing());

};
Window_MenuStatus.prototype.actorMeta = function (actor) {
    const actorMeta = $dataActors[actor._actorId]
    if (actorMeta.meta.picture) {
        this._menuActorMeta = String(actorMeta.meta.picture);
    }
    else {
        this._menuActorMeta = null;
    }
}
Window_MenuStatus.prototype.drawActorName = function (actor, x, y, width) {
    this.contents.fontSize = FlyCat.MainMenu.fontNameSize;
    width = width || 168;
    this.changeTextColor(ColorManager.hpColor(actor));
    this.drawText(actor.name(), x + FlyCat.MainMenu.nameX, y + FlyCat.MainMenu.nameY, width);
    this.contents.fontSize = FlyCat.MainMenu.fontSize;
    this.resetTextColor();

};
Window_MenuStatus.prototype.drawActorClass = function (actor, x, y, width) {
    width = width || 168;
    this.resetTextColor();
    if (actor.currentClass().meta.color) {
        const color = Number(actor.currentClass().meta.color);
        this.changeTextColor(ColorManager.textColor(color));
    }
    this.contents.fontSize = FlyCat.MainMenu.classNameSize;
    this.drawText(actor.currentClass().name, x + FlyCat.MainMenu.classNameX, y + FlyCat.MainMenu.classNameY, width);
    this.resetTextColor();
}
Window_StatusBase.prototype.drawActorClass = function (actor, x, y, width) {
    width = width || 168;
    this.resetTextColor();
    if (actor.currentClass().meta.color) {
        const color = Number(actor.currentClass().meta.color);
        this.changeTextColor(ColorManager.textColor(color));
    }
    this.drawText(actor.currentClass().name, x, y, width);
    this.resetTextColor();
};
Window_MenuStatus.prototype.drawActorLevel = function (actor, x, y) {
    this.resetTextColor();
    if (Imported.FlyCat_CoreEngine) {
        if (FlyCat.CoreEngine.showLevelNames) {
            this.contents.fontSize = FlyCat.MainMenu.levelSize;
            this.changeTextColor(ColorManager.textColor(FlyCat.MainMenu.levelColor));
            this.drawText(this.LevelName(actor.level), x + FlyCat.MainMenu.levelX, y + FlyCat.MainMenu.levelY, 312);
            this.resetTextColor();
        }
        else {
            this.drawActorLevelText(actor, x, y)
        }
    }
    else {
        this.drawActorLevelText(actor, x, y)
    }

};
Window_MenuStatus.prototype.drawActorLevelText = function (actor, x, y) {
    this.contents.fontSize = FlyCat.MainMenu.levelTextSize;
    this.changeTextColor(ColorManager.textColor(FlyCat.MainMenu.levelTextColor));
    this.drawText(TextManager.levelA, x + FlyCat.MainMenu.levelTextX, y + FlyCat.MainMenu.levelTextY, 48);
    this.resetTextColor();
    this.changeTextColor(ColorManager.textColor(FlyCat.MainMenu.levelColor));
    this.contents.fontSize = FlyCat.MainMenu.levelSize;
    this.drawText(actor.level, x + FlyCat.MainMenu.levelX, y + FlyCat.MainMenu.levelY, 36, "right");
    this.resetTextColor();
}
Window_MenuStatus.prototype.drawActorIcons = function (actor, x, y, width) {
    width = width || 144;
    const iconWidth = ImageManager.iconWidth;
    const icons = actor.allIcons().slice(0, Math.floor(width / iconWidth));
    let iconX = x + FlyCat.MainMenu.actorStatusIconX;
    for (const icon of icons) {
        this.drawIcon(icon, iconX, y + 2 + FlyCat.MainMenu.actorStatusIconY);
        iconX += iconWidth + FlyCat.MainMenu.actorStatusIconColspacing;
    }
};
Window_MenuStatus.prototype.placeBasicGauges = function (actor, x, y) {
    this.placeGauge(actor, "hp", x + FlyCat.MainMenu.actorHpBimapX, y + FlyCat.MainMenu.actorHpBimapY);
    this.placeGauge(actor, "mp", x + FlyCat.MainMenu.actorHpBimapX, y + FlyCat.MainMenu.actorHpBimapY + this.gaugeLineHeight());
    if ($dataSystem.optDisplayTp) {
        this.placeGauge(actor, "tp", x + FlyCat.MainMenu.actorHpBimapX, y + FlyCat.MainMenu.actorHpBimapY + this.gaugeLineHeight() * 2);
    }
};
Window_MenuStatus.prototype.placeGauge = function (actor, type, x, y) {
    const key = "actor%1-gauge-%2".format(actor.actorId(), type);
    const sprite = this.createInnerSprite(key, Sprite_NewGauge);
    sprite.setup(actor, type);
    sprite.move(x, y);
    sprite.show();
};

Window_MenuStatus.prototype.drawBackgroundRect = function (rect) {
    if (FlyCat.MainMenu.actorMenuBackGround) {
        const bitmap = ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.actorMenuBackGround)
        const x = rect.x;
        const y = rect.y;
        const pw = bitmap.width;
        const ph = bitmap.height;
        const w = rect.width;
        const h = rect.height;
        const scw = pw > w ? pw * (w / pw) : pw;
        const sch = ph > h ? h : ph;
        this.contents.blt(bitmap, 0, 0, pw, ph, x, y, scw, sch);
    }
};
function Sprite_menuButton() {
    this.initialize(...arguments);
}
Sprite_menuButton.prototype = Object.create(Sprite_Clickable.prototype);
Sprite_menuButton.prototype.constructor = Sprite_menuButton;

Sprite_menuButton.prototype.initialize = function () {
    Sprite_Clickable.prototype.initialize.call(this);
    this._clickHandler = null;
    this._lastBimap = null;
    this._pressCounts = 0;
};

Sprite_menuButton.prototype.onClick = function () {
    if (_Scene_MainMenu._inputCursor == 0) {
        if (this._clickHandler) {
            this._clickHandler();
        }
    }
};
Sprite_menuButton.prototype.setClickHandler = function (method) {
    if (_Scene_MainMenu._inputCursor == 0) {
        this._clickHandler = method;
    }
};
Sprite_menuButton.prototype.onMouseEnter = function () {
    if (_Scene_MainMenu._inputCursor == 0) {
        SoundManager.playCursor();
        $gameTemp._buttonName = this._nameMenu;
        this._colorTone = FlyCat.MainMenu.cursorColor
        this._updateColorFilter();
    }

};
Sprite_menuButton.prototype.onMouseExit = function () {
    if (_Scene_MainMenu._inputCursor == 0) {
        this._colorTone = [0, 0, 0, 0]
        this._updateColorFilter();
    }
};
Sprite_menuButton.prototype.nameMenu = function (name) {
    this._nameMenu = name;
};


function Sprite_NewGauge() {
    this.initialize(...arguments);
}

Sprite_NewGauge.prototype = Object.create(Sprite_Gauge.prototype);
Sprite_NewGauge.prototype.constructor = Sprite_NewGauge;

Sprite_NewGauge.prototype.initialize = function () {
    Sprite_Gauge.prototype.initialize.call(this);
    this._frontSprite = [];
    this._backSprite = [];
    this._valueSprite = [];
    this._labelSprite = [];
    this._valueBimap = null;
    this._labelBimap = null;
    this._typeId = null;
};

Sprite_NewGauge.prototype.drawValue = function () {
    const currentValue = this.currentValue();
    const currentMaxValue = this.currentMaxValue();
    const width = this.bitmapWidth() + FlyCat.MainMenu.actorValueWidth;
    const height = this.bitmapHeight() + FlyCat.MainMenu.actorValueHeight;
    if (this._statusType === "hp") {
        this._typeId = 0;
        var offsetX = FlyCat.MainMenu.actorHpValueX;
        var offsetY = FlyCat.MainMenu.actorHpValueY;
    }
    if (this._statusType === "mp") {
        this._typeId = 1;
        var offsetX = FlyCat.MainMenu.actorMpValueX;
        var offsetY = FlyCat.MainMenu.actorMpValueY;
    }
    if (this._statusType === "tp") {
        this._typeId = 2;
        var offsetX = FlyCat.MainMenu.actorTpValueX;
        var offsetY = FlyCat.MainMenu.actorTpValueY;
    }
    this._valueBimap = new Bitmap(width, height)
    this.setupValueFont();
    this._valueBimap.drawText(currentValue + FlyCat.MainMenu.actorValueString + currentMaxValue, 0, 0, width, height, "left");
    this._valueSprite[this._typeId] = new Sprite()
    this._valueSprite[this._typeId].bitmap = this._valueBimap;
    this.addChild(this._valueSprite[this._typeId])
    this._valueSprite[this._typeId].x = offsetX;
    this._valueSprite[this._typeId].y = offsetY;
};
Sprite_NewGauge.prototype.setupValueFont = function () {
    this._valueBimap.fontFace = this.valueFontFace();
    this._valueBimap.fontSize = this.valueFontSize();
    this._valueBimap.textColor = this.valueColor();
    this._valueBimap.outlineColor = this.valueOutlineColor();
    this._valueBimap.outlineWidth = this.valueOutlineWidth();
};
Sprite_NewGauge.prototype.initBackground = function () {
    ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.actorHpPicture);
    ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.actorMpPicture);
    ImageManager.loadBitmap('img/menu/', FlyCat.MainMenu.actorTpPicture);
};
Sprite_NewGauge.prototype.setup = function (battler, statusType) {
    this._battler = battler;
    this._statusType = statusType;
    this._value = this.currentValue();
    this._maxValue = this.currentMaxValue();
    this.initBackground();
    this.updateBitmap();
};
Sprite_NewGauge.prototype.redraw = function () {
    this.bitmap.clear();
    if (this._labelBimap) { this._labelBimap.clear() }
    if (this._valueBimap) { this._valueBimap.clear() }
    const currentValue = this.currentValue();
    if (!isNaN(currentValue)) {
        this.drawGauge();
        if (this._statusType !== "time") {
            if (FlyCat.MainMenu.actorLabelSwitch) {
                this.drawLabel();
            }
            if (FlyCat.MainMenu.actorValueSwitch) {
                this.drawValue();
            }

        }
    }
};
Sprite_NewGauge.prototype.drawLabel = function () {
    const label = this.label();
    const x = this.labelOutlineWidth() / 2;
    const y = this.labelY();
    const width = this.bitmapWidth();
    const height = this.bitmapHeight();
    if (this._statusType === "hp") {
        this._typeId = 0;
        var offsetX = FlyCat.MainMenu.actorHpLabelX;
        var offsetY = FlyCat.MainMenu.actorHpLabelY;
    }
    if (this._statusType === "mp") {
        this._typeId = 1;
        var offsetX = FlyCat.MainMenu.actorMpLabelX;
        var offsetY = FlyCat.MainMenu.actorMpLabelY;
    }
    if (this._statusType === "tp") {
        this._typeId = 2;
        var offsetX = FlyCat.MainMenu.actorTpLabelX;
        var offsetY = FlyCat.MainMenu.actorTpLabelY;
    }
    this._labelBimap = new Bitmap(width, height)
    this.setupLabelFont();
    this._labelBimap.drawText(label, x, y, width, height, "left");
    this._labelSprite[this._typeId] = new Sprite()
    this._labelSprite[this._typeId].bitmap = this._labelBimap;
    this.addChild(this._labelSprite[this._typeId])
    this._labelSprite[this._typeId].x = offsetX;
    this._labelSprite[this._typeId].y = offsetY;
};
Sprite_NewGauge.prototype.setupLabelFont = function () {
    this._labelBimap.fontFace = this.labelFontFace();
    this._labelBimap.fontSize = this.labelFontSize();
    this._labelBimap.textColor = this.labelColor();
    this._labelBimap.outlineColor = this.labelOutlineColor();
    this._labelBimap.outlineWidth = this.labelOutlineWidth();
};
Sprite_NewGauge.prototype.labelColor = function () {
    return ColorManager.textColor(FlyCat.MainMenu.actorLabelColor);
};
Sprite_NewGauge.prototype.drawGaugeRect = function (x, y, width, height) {
    if (FlyCat.MainMenu.actorPicture) {
        const rate = this.gaugeRate();
        var offsetX = 0;
        var offsetY = 0;
        if (this._statusType === "hp") {
            this._typeId = 0;
            var actorimg = FlyCat.MainMenu.actorHpPicture;
            var offsetX = FlyCat.MainMenu.actorHpPictureX;
            var offsetY = FlyCat.MainMenu.actorHpPictureY;
        }
        if (this._statusType === "mp") {
            this._typeId = 1;
            var actorimg = FlyCat.MainMenu.actorMpPicture;
            var offsetX = FlyCat.MainMenu.actorMpPictureX;
            var offsetY = FlyCat.MainMenu.actorMpPictureY;
        }
        if (this._statusType === "tp") {
            this._typeId = 2;
            var actorimg = FlyCat.MainMenu.actorTpPicture;
            var offsetX = FlyCat.MainMenu.actorTpPictureX;
            var offsetY = FlyCat.MainMenu.actorTpPictureY;
        }
        if (this._typeId != null) {

            this._frontBitmap = ImageManager.loadBitmap('img/menu/', actorimg);
            this._frontWidth = this._frontBitmap.width;
            this._frontHeight = this._frontBitmap.height;
            //////////////////////////////
            this._backSprite[this._typeId] = new Sprite()
            this._backSprite[this._typeId].bitmap = this._frontBitmap;
            this._backSprite[this._typeId].setFrame(0, this._frontHeight / 2, this._frontWidth, this._frontHeight / 2);
            this.addChild(this._backSprite[this._typeId]);
            this._backSprite[this._typeId].x = x + offsetX;
            this._backSprite[this._typeId].y = y + offsetY;
            ////////////////////////////////
            this._frontSprite[this._typeId] = new Sprite();
            this._frontSprite[this._typeId].bitmap = this._frontBitmap;
            this._frontSprite[this._typeId].setFrame(0, 0, this._frontWidth, this._frontHeight / 2);
            this.addChild(this._frontSprite[this._typeId]);
            this._frontSprite[this._typeId].x = x + offsetX + 1;
            this._frontSprite[this._typeId].y = y + offsetY + 0.5;
            const fillW = Math.floor((this._frontWidth - 2) * rate);
            const fillH = this._frontHeight - 2;
            this._frontSprite[this._typeId].width = fillW;
        }
    }
};
Sprite_NewGauge.prototype.gaugeRate = function () {
    const value = this._value;
    const maxValue = this._maxValue;
    return maxValue > 0 ? value / maxValue : 0;
};
Sprite_NewGauge.prototype.bitmapWidth = function () {
    return 128;
};

Sprite_NewGauge.prototype.bitmapHeight = function () {
    return 24;
};

Sprite_NewGauge.prototype.gaugeHeight = function () {
    return 12;
};

Sprite_NewGauge.prototype.valueFontSize = function () {
    return FlyCat.MainMenu.actorValueFontSize;
};

Sprite_NewGauge.prototype.labelFontSize = function () {
    return FlyCat.MainMenu.actorLabelFontSize;
};

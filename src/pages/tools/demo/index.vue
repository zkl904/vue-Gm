<template>
	<div class="fz-16 ph-20 pv-20">

		<!-- //过滤器 -->
		<div class="wd-per-100 mb-40">
			<div class="fz-30 pb-10">过滤器的处理</div>
			<div class="bb-secondary-1"></div>
			<div class="fz-14 pv-10 fc-gray-999">
				template中直接使用 管道符号“|” thousandSplit。在js 中使用this.$filter.thousandSplit。
			</div>
			<div>
				<mt-cell title="总资产" :value="assets"></mt-cell>
				<mt-cell title="千位分隔符" :value="test1 | thousandSplit"></mt-cell>
				<mt-cell title="取两位小数" :value="test2 | fetchBit(false,2)"></mt-cell>
				<mt-cell title="取两位小数(四舍五入)" :value="test2 | fetchBit(true,2)"></mt-cell>
				<mt-cell title="取指定位小数" :value="test2 | fetchBit(false,5)"></mt-cell>
				<mt-cell title="取指定位小数(四舍五入)" :value="test2 | fetchBit(true,5)"></mt-cell>
				<mt-cell title="混合使用" :value="test3 | fetchBit(true,5) | thousandSplit"></mt-cell>
				<mt-cell title="转换为万" :value="test4 | convertTenThousand | fetchBit(true,2)"></mt-cell>
			</div>
		</div>
		<!-- //过滤器 end -->

		<!-- //字号大小 -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">字号大小</div>
			<div class="bb-secondary-1"></div>
			<div class="fz-14 pv-10 fc-gray-999">
				.fz-{字号大小，最大为50, 最小为12}。如 .fz-14 表示14px。下面为示例：
			</div>
			<div>
				<div class="fz-50">50px  .fz-50</div>
				<div class="fz-30">30px  .fz-30</div>
				<div class="fz-12">12px  .fz-12</div>
			</div>
		</div>
		<!-- //字号大小 end -->

		<!-- //字颜色 -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">字颜色</div>
			<div class="bb-secondary-1"></div>
			<div class="mt-10">
				<div class="fc-primary">主色：.fc-primary</div>
				<div class="fc-secondary">辅助色：.fc-secondary</div>
				<div class="fc-gray-333">主要文案色：.fc-gray-333</div>
				<div class="fc-gray-666">一般文案色：.fc-gray-666</div>
				<div class="fc-gray-999">弱化文案色：.fc-gray-999</div>
				<div class="fc-gray-disable">售罄过期等文案色：.fc-gray-disable</div>
			</div>
		</div>
		<!-- //字颜色 end -->

		<!-- //字重量 -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">字重量</div>
			<div class="bb-secondary-1"></div>
			<div class="mt-10">
				<div class="fw-blod">加重：.fw-blod</div>
				<div class="fw-normal">正常：.fc-normal</div>
			</div>
		</div>
		<!-- //字重量 end -->

		<!-- //1px线 -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">1px线</div>
			<div class="bb-secondary-1"></div>
			<div class="mt-10">
				<div>实线：.line-1</div>
				<div class="line-1 mb-10"></div>
				<div>虚线：.line-dashed-1</div>
				<div class="line-dashed-1 mb-10"></div>
			</div>
		</div>
		<!-- //1px线 end -->

		<!-- //行高 -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">行高</div>
			<div class="bb-secondary-1"></div>
			<div class="fz-14 pv-10 fc-gray-999">
				.lh-100 表示行高为100%，.lh-200表示行高为200%。 步长为10
			</div>
			<div>
				<div class="lh-100 bg-secondary">.lh-100</div>
				<div class="lh-150 bg-primary">.lh-150</div>
				<div class="lh-200 bg-secondary">.lh-200</div>
			</div>
		</div>
		<!-- //行高 end -->

		<!-- //内容位置 -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">内容位置</div>
			<div class="bb-secondary-1"></div>
			<div>
				<div class="text-left">居左: .text-left</div>
				<div class="text-center">居中: .text-center</div>
				<div class="text-right">居右: .text-right</div>
			</div>
		</div>
		<!-- //内容位置 end -->

		<!-- //定位 -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">定位</div>
			<div class="bb-secondary-1"></div>
			<div>
				<div>相对定位： .relative</div>
				<div>绝对定位： .absolute</div>
				<div>固定定位： .fixed</div>
			</div>
		</div>
		<!-- //定位 end -->

		<!-- //块与行 -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">块与行</div>
			<div class="bb-secondary-1"></div>
			<div>
				<div>块： .block</div>
				<div>行： .inblock</div>
			</div>
		</div>
		<!-- //块与行 end -->

		<!-- //margin padding -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">margin与padding</div>
			<div class="bb-secondary-1"></div>
			<div class="fz-14 pv-10 fc-gray-999">
				margin与padding完全一样，只有两个缩写区别：m与p。
				margin与padding的值区间为 0-50, 单位为 px
			</div>
			<div>
				<div>.ml-10 代表margin-left:10px</div>
				<div>.pl-10 代表padding-left:10px</div>
				<div>.mt-10 代表margin-top:10px</div>
				<div>.mb-10 代表margin-bottom:10px</div>
				<div>.mr-10 代表margin-right:10px</div>
				<div>.mv-10 代表margin-top:10px  margin-bottom:10px</div>
				<div>.mh-10 代表margin-left:10px  margin-right:10px</div>
			</div>
		</div>
		<!-- //margin padding end -->

		<!-- //top、bottom、width、height -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">top与bottom, width与height</div>
			<div class="bb-secondary-1"></div>
			<div class="fz-14 pv-10 fc-gray-999">
				top与bottom完全一样，其中width缩写为wd，height的缩写为hgh。
				值区间为单位为 px 时，值可为0-50，当单位为%时，值可为0-10
			</div>
			<div>
				<div>.top-10 代表top:10px</div>
				<div>.top-per-10 代表padding-left:10%</div>
				<div>.wd-per-10 代表width:10%</div>
			</div>
		</div>
		<!-- //top、bottom、width、height end -->

		<!-- //flex -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">flex</div>
			<div class="bb-secondary-1"></div>
			<div class="fz-14 pv-10 fc-gray-999">
				外层div常用上下左右居中 .flex .flex-between .item-center
			</div>
			<div class="flex flex-between item-center fc-white">
				<div class="bg-primary">这是flex布局1</div>
				<div class="bg-secondary">这是flex布局2</div>
				<div class="bg-gray-666">这是flex布局3</div>
			</div>
		</div>
		<!-- //flex end -->

		<!-- //flex -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">background</div>
			<div class="bb-secondary-1"></div>
			<div class="fz-14 pv-10 fc-gray-999">
				背景颜色样式都是“bg-”开始
			</div>
			<div class="flex flex-between item-center fc-white">
				<div class="bg-primary">主色背景</div>
				<div class="bg-secondary">辅助色背景</div>
				<div class="bg-gray-666">灰色背景</div>
			</div>
		</div>
		<!-- //flex end -->

		<!-- //button -->
		<div class="wd-per-100 mb-20">
			<div class="fz-30 pb-10">button</div>
			<div class="bb-secondary-1"></div>
			<div class="fz-14 pv-10 fc-gray-999">
				所有按钮都必须有 .button 基类. 以display：inline-block显示
			</div>
			<div class="">
				<div class="mb-5"><span class="button button-primary">主色按钮</span></div>
				<div class="mb-5"><span class="button button-secondary">辅助色按钮</span></div>
				<div class="mb-5"><span class="button button-disable">disable按钮</span></div>
				<div class="mb-5"><span class="button button-primary button-outline">主色边框按钮</span></div>
				<div class="mb-5"><span class="button button-secondary button-outline">辅助色边框按钮</span></div>
				<div class="mb-5"><span class="button button-primary button-full">宽度100%按钮</span></div>
				<div class="mb-5"><span class="button button-primary-gradient button-full">主色渐变按钮</span></div>
				<div class="mb-5"><span class="button button-primary-gradient button-full button-radius">圆角按钮</span></div>
				<div class="mb-5"><span class="button button-disable button-full button-radius">圆角灰色按钮</span></div>
				<div class="mb-5"><span class="button button-primary button-outline button-full button-radius">圆角按钮</span></div>
			</div>
		</div>
		<!-- //button end -->

	</div>
</template>

<script>
  import { Cell, Picker } from 'mint-ui'
  export default {
    data() {
      return {
        test1: 123456712384567.12,
        test2: 123.456789,
        test3: 1234567123845.123456,
        test4: 12345,
        assets: '12232323.25'
      }
    },
    async created() {
    },
    methods: {
    },
    computed: {
    },
    components: {
      [Cell.name]: Cell,
      [Picker.name]: Picker
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

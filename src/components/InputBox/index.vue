<template>
	<div class="inputBox" v-clickoutside="handleBlur">
		<slot></slot>
		<input
			@change="$emit('change', currentValue)"
			ref="input"
			class="mint-field-core"
			:placeholder="placeholder"
			:number="type === 'number'"
			:type="type"
			@focus="active = true"
			@blur="handleBlur"
			:disabled="disabled"
			:readonly="readonly"
			:value="currentValue"
			@click="active = true"
			@input="handleInput">
		<!--<div-->
		<!--@click="handleClear"-->
		<!--class="mint-field-clear relative"-->
		<!--v-if="!disableClear"-->
		<!--v-show="currentValue && type !== 'textarea' && active && clear">-->
		<!--<i class="mintui mintui-field-error"></i>-->
		<!--</div>-->
		<div
			@click="handleClear"
			class="mint-field-clear relative"
			v-show="currentValue && active && clear">
			<i class="mintui mintui-field-error"></i>
		</div>
		<span class="mint-field-state" v-if="state" :class="['is-' + state]">
      <i class="mintui" :class="['mintui-field-' + state]"></i>
    </span>
	</div>
</template>

<script type="text/ecmascript-6">
  /**
   * input-box
   * @desc 文本框（基于mint-ui修改）
   * @module components/InputBox
   *
   * @param {string} [type=text] - field 类型，接受 text 等（不包括textarea）
   * @param {string} [placeholder] - placeholder
   * @param {string} [disabled] - disabled
   * @param {string} [readonly] - readonly
   * @param {string} [state] - 表单校验状态样式，接受 error, warning, success
   * @param {Boolean} [clear] - 是否显示清空按钮
   *
   * @example
   * <input-box v-model="value" label="用户名"></input-box>
   * <input-box v-model="value" placeholder="请输入密码"></input-box>
   * <input-box v-model="value" label="邮箱" placeholder="成功状态" state="success"></input-box>
   */
  import Clickoutside from 'mint-ui/src/utils/clickoutside'

  export default {
    name: 'inputBox',
    directives: {
      Clickoutside
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      readonly: Boolean,
      disabled: Boolean,
      disableClear: Boolean,
      clear: {
        type: Boolean,
        default: true
      },
      state: {
        type: String,
        default: 'default'
      },
      value: {},
      attr: Object
    },
    data() {
      return {
        active: false,
        currentValue: this.value
      }
    },
    methods: {
      handleBlur() {
        setTimeout(() => {
          this.active = false
          this.$refs['input'].blur()
        }, 0)
      },
      handleInput(evt) {
        this.currentValue = evt.target.value.replace(/\n/g, '')
      },
      handleClear() {
        if (this.disabled || this.readonly) return
        this.currentValue = ''
        this.$nextTick(() => {
          this.$refs['input'].value = ''
        })
      }
    },
    watch: {
      value(val) {
        if (val) {
          val = String(val)
          this.currentValue = val.replace(/\n/g, '')
          setTimeout(() => {
            if (this.$refs['input'] && (this.type !== 'number' && this.type !== 'password')) {
              let pos = this.$refs['input'].selectionEnd
              this.$refs['input'].setSelectionRange(pos + 1, pos + 1)
            }
          }, 0)
        }
      },
      currentValue(val) {
        if (val) {
          val = String(val)
          val = val.replace(/\n/g, '')
        }
        this.$emit('input', val)
      },
      attr: {
        immediate: true,
        handler(attrs) {
          this.$nextTick(() => {
            const target = [this.$refs.input, this.$refs.textarea]
            target.forEach(el => {
              if (!el || !attrs) return
              Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]))
            })
          })
        }
      }
    },
    async created() {
      let _self = this
      this.$nextTick(() => {
        if (this.type === 'number') {
          this.$refs['input'].oninput = function (e) {
            e.preventDefault()
            if (!(/\d+/).test(_self.$refs['input'].value)) {
              _self.$refs['input'].value = ''
            }
          }
          this.$refs['input'].focus()
          setTimeout(function () {
            _self.$refs['input'].blur()
          }, 0)
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.inputBox
		display flex
		align-items center
		font-size: 16px
		line-height: 1
		overflow hidden
		box-sizing border-box
		padding 0 20px
		& input
			text-align inherit
		.mint-field-clear
			z-index 666
</style>

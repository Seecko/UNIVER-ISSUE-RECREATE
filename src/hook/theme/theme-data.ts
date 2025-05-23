/**
 * 色值变量总结与2024.08.13
 * 参考figma(https://www.figma.com/design/blNr4XG06UdPHIUF11ZZoe/ACC-Library-(Light)?node-id=10138-20087&t=DzlYYlx1u781OrRG-0)
 * 参考语义色盘部分
 * 摘抄：黄振奇(text、bdr、layer)、秦少帅(icon、bg)
 */
import { THEME_KEY } from './theme-key'

export const themes = {
  [THEME_KEY.themeNames.lightTheme]: {
    id: THEME_KEY.themeNames.lightTheme,
    data: {
      /**icon */
      // icon / on_strong
      'icon-on_strong': '#FFFFFF',
      // icon / on_subtle / 0_neutral
      'icon-on_subtle-0_neutral-normal': '#787878',
      'icon-on_subtle-0_neutral-hover': '#787878',
      'icon-on_subtle-0_neutral-active': '#008CD6',
      'icon-on_subtle-0_neutral-active_on_strong': '#FFFFFF',
      'icon-on_subtle-0_neutral-disable': '#C8C8C8',
      // icon / on_subtle /0_neutral_dark
      'icon-on_subtle-0_neutral_dark-normal': '#323233',
      'icon-on_subtle-0_neutral_dark-hover': '#323233',
      'icon-on_subtle-0_neutral_dark-active': '#008CD6',
      'icon-on_subtle-0_neutral_dark-active-on-strong': '#FFFFFF',
      'icon-on_subtle-0_neutral_dark-disable': '#C8C8C8',
      // icon / on_subtle /0_neutral_cool
      'icon-on_subtle-0_neutral_cool-normal': '#BAC0CB',
      'icon-on_subtle-0_neutral_cool-hover': '#3DBBF9',
      'icon-on_subtle-0_neutral_cool-active': '#008CD6',
      'icon-on_subtle-0_neutral_cool-active-on-strong': '#FFFFFF',
      'icon-on_subtle-0_neutral_cool-disable': '#C8C8C8',
      // icon / on_subtle / 1_info
      'icon-on_subtle-1_info-normal': '#0062CC',
      'icon-on_subtle-1_info-hover': '#0054AE',
      'icon-on_subtle-1_info-active': '#FFFFFF',
      'icon-on_subtle-1_info-disable': '#92C6FF',
      // icon / on_subtle /2_success
      'icon-on_subtle-2_success-normal': '#00B900',
      'icon-on_subtle-2_success-hover': '#009E00',
      'icon-on_subtle-2_success-active': '#FFFFFF',
      'icon-on_subtle-2_success-disable': '#91E191',
      // icon / on_subtle / 3_warning
      'icon-on_subtle-3_warning-normal': '#FF9300',
      'icon-on_subtle-3_warning-hover': '#D67C00',
      'icon-on_subtle-3_warning-active': '#FFFFFF',
      'icon-on_subtle-3_warning-disable': '#FFD091',
      // icon / on_subtle / 4_caution
      'icon-on_subtle-4_caution-normal': '#C9A53C',
      'icon-on_subtle-4_caution-hover': '#A78932',
      'icon-on_subtle-4_caution-active': '#FFFFFF',
      'icon-on_subtle-4_caution-disable': '#F5DFA1',
      // icon / on_subtle / 6_viz
      'icon-on_subtle-6_viz-normal': '#8048C8',
      'icon-on_subtle-6_viz-hover': '#6D3DAB',
      'icon-on_subtle-6_viz-active': '#FFFFFF',
      'icon-on_subtle-6_viz-disable': '#C8B0E7',
      // icon / on_subtle / 9_viz
      'icon-on_subtle-9_viz-normal': '#A7D100',
      'icon-on_subtle-9_viz-hover': '#86A800',
      'icon-on_subtle-9_viz-active': '#FFFFFF',
      'icon-on_subtle-9_viz-disable': '#D9EB91',
      // icon / on_subtle / 10_viz
      'icon-on_subtle-10_viz-normal': '#03C982',
      'icon-on_subtle-10_viz-hover': '#02AC6F',
      'icon-on_subtle-10_viz-active': '#FFFFFF',
      'icon-on_subtle-10_viz-disable': '#93E7C9',
      // icon / on_subtle /11_critical
      'icon-on_subtle-11_critical-normal': '#DF001A',
      'icon-on_subtle-11_critical-hover': '#BF0016',
      'icon-on_subtle-11_critical-active': '#9F0012',
      'icon-on_subtle-11_critical-active-on-strong': '#FFFFFF',
      'icon-on_subtle-11_critical-disable': '#F1919C',
      // icon / on_subtle /13_emphasis
      'icon-on_subtle-13_emphasis-normal': '#008CD6',
      'icon-on_subtle-13_emphasis-hover': '#0078B7',
      'icon-on_subtle-13_emphasis-active': '#008CD6',
      'icon-on_subtle-13_emphasis-active-on-strong': '#FFFFFF',
      'icon-on_subtle-13_emphasis-disable': '#48ACE1',
      'icon-on_subtle-13_brand-normal': '#008CD6', // TODO: 色指标没有，进行添加
      /**text */
      // role
      'text-primary': '#323233',
      'text-secondary': '#787878',
      'text-disable': '#C8C8C8',
      'text-on_strong': '#FFFFFF',
      // text / on_subtle / 0_neutral
      'text-on_subtle-0_neutral-normal': '#787878',
      'text-on_subtle-0_neutral-hover': '#787878',
      'text-on_subtle-0_neutral-active': '#008CD6',
      'text-on_subtle-0_neutral-active-on_strong': '#FFFFFF',
      'text-on_subtle-0_neutral-disable': '#C8C8C8',
      // text / on_subtle / 0_neutral_dark
      'text-on_subtle-0_neutral_dark-normal': '#323233',
      'text-on_subtle-0_neutral_dark-hover': '#323233',
      'text-on_subtle-0_neutral_dark-active': '#008CD6',
      'text-on_subtle-0_neutral_dark-active-on_strong': '#FFFFFF',
      'text-on_subtle-0_neutral_dark-disable': '#C8C8C8',
      // text / on_subtle / 1_info
      'text-on_subtle-1_info-normal': '#0062CC',
      'text-on_subtle-1_info-hover': '#0054AE',
      'text-on_subtle-1_info-active-on_strong': '#FFFFFF',
      'text-on_subtle-1_info-disable': '#92C6FF',
      // text / on_subtle / 2_success
      'text-on_subtle-2_success-normal': '#00B900',
      'text-on_subtle-2_success-hover': '#009E00',
      'text-on_subtle-2_success-active-on_strong': '#FFFFFF',
      'text-on_subtle-2_success-disable': '#91E191',
      // text / on_subtle / 3_warning
      'text-on_subtle-3_warning-normal': '#FF9300',
      'text-on_subtle-3_warning-hover': '#D67C00',
      'text-on_subtle-3_warning-active-on_strong': '#FFFFFF',
      'text-on_subtle-3_warning-disable': '#FFD091',
      // text / on_subtle / 4_caution
      'text-on_subtle-4_caution-normal': '#C9A53C',
      'text-on_subtle-4_caution-hover': '#A78932',
      'text-on_subtle-4_caution-active-on_strong': '#FFFFFF',
      'text-on_subtle-4_caution-disable': '#F6E4B0',
      // text / on_subtle / 5_viz
      'text-on_subtle-5_viz-normal': '#FB4788',
      // text / on_subtle / 6_viz
      'text-on_subtle-6_viz-normal': '#8048C8',
      'text-on_subtle-6_viz-hover': '#6D3DAB',
      'text-on_subtle-6_viz-active-on_strong': '#FFFFFF',
      'text-on_subtle-6_viz-disable': '#C8B0E7',
      // text / on_subtle / 7_viz
      'text-on_subtle-7_viz-normal': '#809BEB',
      // text / on_subtle /8_viz
      'text-on_subtle-8_viz-normal': '#3DBBF9',
      // text / on_subtle / 9_viz
      'text-on_subtle-9_viz-normal': '#A7D100',
      'text-on_subtle-9_viz-hover': '#86A800',
      'text-on_subtle-9_viz-active-on_strong': '#FFFFFF',
      'text-on_subtle-9_viz-disable': '#D9EB91',
      // text / on_subtle / 10_viz
      'text-on_subtle-10_viz-normal': '#03C982',
      'text-on_subtle-10_viz-hover': '#02AC6F',
      'text-on_subtle-10_viz-active-on_strong': '#FFFFFF',
      'text-on_subtle-10_viz-disable': '#93E7C9',
      // text / on_subtle / 11_critical
      'text-on_subtle-11_critical-normal': '#DF001A',
      'text-on_subtle-11_critical-hover': '#BF0016',
      'text-on_subtle-11_critical-active': '#9F0012',
      'text-on_subtle-11_critical-active-on_strong': '#FFFFFF',
      'text-on_subtle-11_critical-disable': '#F1919C',
      // text / on_subtle / 12_viz
      'text-on_subtle-12_viz-normal': '#D700F9',
      // text / on_subtle /13_emphasis
      'text-on_subtle-13_emphasis-normal': '#008CD6',
      'text-on_subtle-13_emphasis-hover': '#0078B7',
      'text-on_subtle-13_emphasis-active': '#008CD6',
      'text-on_subtle-13_emphasis-active_on_strong': '#FFFFFF',
      'text-on_subtle-13_emphasis-disable': '#91CDED',
      /**bdr */
      // Role
      'bdr-main': '#FFFFFF',
      // bdr / strong
      'bdr-strong-disabled': '#E6E6E6',
      // bdr / strong / 0_neutral
      'bdr-strong-0_neutral-normal': '#787878',
      'bdr-strong-0_neutral-hover': '#323233',
      'bdr-strong-0_neutral-active': '#008CD6',
      'bdr-strong-0_neutral-disable': '#C8C8C8',
      // bdr / strong / 1_info
      'bdr-strong-1_info-normal': '#0062CC',
      'bdr-strong-1_info-hover': '#0054AE',
      'bdr-strong-1_info-active': '#0062CC',
      // bdr / strong / 2_success
      'bdr-strong-2_success-normal': '#00B900',
      'bdr-strong-2_success-hover': '#009E00',
      'bdr-strong-2_success-active': '#00B900',
      // bdr / strong / 3_warning
      'bdr-strong-3_warning-normal': '#FF9300',
      'bdr-strong-3_warning-hover': '#D67C00',
      'bdr-strong-3_warning-active': '#FF9300',
      // bdr / strong / 4_caution
      'bdr-strong-4_caution-normal': '#EBC147',
      'bdr-strong-4_caution-hover': '#C9A53C',
      'bdr-strong-4_caution-active': '#EBC147',
      // bdr / strong / 5_viz
      'bdr-strong-5_viz-normal': '#FB4788',
      'bdr-strong-5_viz-hover': '#D73C74',
      'bdr-strong-5_viz-active': '#FB4788',
      // bdr / strong / 6_viz
      'bdr-strong-6_viz-normal': '#8048C8',
      'bdr-strong-6_viz-hover': '#6D3DAB',
      'bdr-strong-6_viz-active': '#8048C8',
      // bdr / strong / 7_viz
      'bdr-strong-7_viz-normal': '#809BEB',
      // bdr / strong / 8_viz
      'bdr-strong-8_viz-normal': '#3DBBF9',
      'bdr-strong-8_viz-hover': '#34A0D5',
      'bdr-strong-8_viz-active': '#3DBBF9',
      // bdr / strong / 9_viz
      'bdr-strong-9_viz-normal': '#A7D100',
      // bdr / strong / 10_viz
      'bdr-strong-10_viz-normal': '#03C982',
      // bdr / strong /11_critical
      'bdr-strong-11_critical-normal': '#DF001A',
      'bdr-strong-11_critical-hover': '#BF0016',
      'bdr-strong-11_critical-active': '#DF001A',
      'bdr-strong-11_critical-disable': '#F1919C',
      // bdr / strong /12_viz
      'bdr-strong-12_viz-normal': '#D700F9',
      // bdr / strong / 13_emphasis
      'bdr-strong-13_emphasis-normal': '#008CD6',
      'bdr-strong-13_emphasis-hover': '#0078B7',
      'bdr-strong-13_emphasis-active': '#008CD6',
      'bdr-strong-13_emphasis-disable': '#91CDED',
      // bdr /subtle
      'bdr-subtle-disable': '#E6E6E6',
      // bdr /subtle / 0_neutral
      'bdr-subtle-0_neutral-normal': '#C8C8C8',
      'bdr-subtle-0_neutral-hover': '#787878',
      'bdr-subtle-0_neutral-active': '#008CD6',
      // bdr /subtle / 6_critical
      'bdr-subtle-6_critical-normal': '#E8485B',
      'bdr-subtle-6_critical-hover': '#E8485B',
      'bdr-subtle-6_critical-active': '#9F0012',
      // bdr /subtle / 7_warning
      'bdr-subtle-7_warning-normal': '#FF9300',
      // bdr /subtle / 9_success
      'bdr-subtle-9_success-normal': '#00B900',
      /**bg */
      // bg / strong / 0_neutral
      'bg-strong-0_neutral-normal': '#787878',
      'bg-strong-0_neutral-hover': '#555555',
      'bg-strong-0_neutral-active': '#008CD6',
      'bg-strong-0_neutral-disable': '#E6E6E6',
      // bg / strong / 1_info
      'bg-strong-1_info-normal': '#0062CC',
      'bg-strong-1_info-disable': '#DAE8F7',
      // bg / strong / 2_succcess
      'bg-strong-2_success-400_normal': '#00B900',
      'bg-strong-2_success-400_hover': '#00B900',
      'bg-strong-2_success-400_active': '#00B900',
      'bg-strong-2_success-100_disable': '#BEEEBE',
      // bg / strong / 3_warning
      'bg-strong-3_warning-400_normal': '#FF9300',
      'bg-strong-3_warning-100_disable': '#FFDAA9',
      // bg / strong / 4_caution
      'bg-strong-4_caution-400_normal': '#EBC147',
      'bg-strong-4_caution-disable': '#A78932',
      // bg / strong / 5_viz
      'bg-strong-5_viz-400_normal': '#FB4788',
      'bg-strong-5_viz-100_disable': '#FED5E4',
      // bg / strong / 6_viz
      'bg-strong-6_viz-400_normal': '#8048C8',
      'bg-strong-6_viz-100_disable': '#E2D5F3',
      // bg / strong / 7_viz
      'bg-strong-7_viz-400_normal': '#809BEB',
      'bg-strong-7_viz-100_disable': '#E2E8FB',
      // bg / strong / 8_viz
      'bg-strong-8_viz-400_normal': '#3DBBF9',
      'bg-strong-8_viz-100_disable': '#D1EFFE',
      // bg / strong / 9_viz
      'bg-strong-9_viz-400_normal': '#A7D100',
      'bg-strong-9_viz-100_disable': '#E6F2B6',
      // bg / strong / 10_viz
      'bg-strong-10_viz-400_normal': '#03C982',
      'bg-strong-10_viz-100_disable': '#C8F3E4',
      // bg / strong / 11_critical
      'bg-strong-11_critical-400_normal': '#DF001A',
      'bg-strong-11_critical-hover': '#BF0016',
      'bg-strong-11_critical-active': '#DF001A',
      'bg-strong-11_critical-disable': '#FBC7C9',
      // bg / strong / 12_viz
      'bg-strong-12_viz-400_normal': '#D700F9',
      'bg-strong-12_viz-100_disable': '#F6C5FE',
      // bg / strong / 13_emphasis
      'bg-strong-13_emphasis-normal': '#008CD6',
      'bg-strong-13_emphasis-hover': '#0078B7',
      'bg-strong-13_emphasis-active': '#008CD6',
      'bg-strong-13_emphasis-disable': '#C3E4F6',
      // bg / subtler
      'bg-subtler-normal-btn': '#FFFFFF',
      // bg / subtler / 0_neutral
      'bg-subtler-0_neutral-normal': '#EDEDED',
      'bg-subtler-0_neutral-hover': '#E6E6E6',
      'bg-subtler-0_neutral-active': '#008CD6',
      'bg-subtler-0_neutral-disable': '#EDEDED',
      // bg / subtler / 1_info
      'bg-subtler-1_info-normal': '#B7DAFF',
      'bg-subtler-1_info-hover': '#B7DAFF',
      'bg-subtler-1_info-active': '#0062CC',
      'bg-subtler-1_info-disable': '#B7DAFF',
      // bg / subtler / 2_success
      'bg-subtler-2_success-normal': '#BEEEBE',
      'bg-subtler-2_success-hover': '#BEEEBE',
      'bg-subtler-2_success-active': '#00B900',
      'bg-subtler-2_success-disable': '#BEEEBE',
      // bg / subtler / 3_warning
      'bg-subtler-3_warning-normal': '#FFDAA9',
      'bg-subtler-3_warning-hover': '#FFDAA9',
      'bg-subtler-3_warning-active': '#FF9300',
      'bg-subtler-3_warning-disable': '#FFDAA9',
      // bg / subtler / 4_caution
      'bg-subtler-4_caution-normal': '#F8E8BA',
      'bg-subtler-4_caution-hover': '#F8E8BA',
      'bg-subtler-4_caution-active': '#EBC147',
      'bg-subtler-4_caution-disable': '#F8E8BA',
      // bg / subtler / 5_viz
      'bg-subtler-5_viz-normal': '#FED5E4',
      // bg / subtler / 6_viz
      'bg-subtler-6_viz-normal': '#E2D5F3',
      'bg-subtler-6_viz-hover': '#E2D5F3',
      'bg-subtler-6_viz-active': '#8048C8',
      'bg-subtler-6_viz-disable': '#E2D5F3',
      // bg / subtler / 7_viz
      'bg-subtler-7_viz-normal': '#E2E8FB',
      // bg / subtler / 8_viz
      'bg-subtler-8_viz-normal': '#D1EFFE',
      // bg / subtler / 9_viz
      'bg-subtler-9_viz-normal': '#E6F2B6',
      'bg-subtler-9_viz-hover': '#E6F2B6',
      'bg-subtler-9_viz-active': '#A7D100',
      'bg-subtler-9_viz-disable': '#E6F2B6',
      // bg / subtler / 10_viz
      'bg-subtler-10_viz-normal': '#C8F3E4',
      'bg-subtler-10_viz-hover': '#C8F3E4',
      'bg-subtler-10_viz-active': '#03C982',
      'bg-subtler-10_viz-disable': '#C8F3E4',
      // bg / subtler / 11_critical
      'bg-subtler-11_critical-normal': '#FBC7C9',
      'bg-subtler-11_critical-hover': '#FBC7C9',
      'bg-subtler-11_critical-active': '#DF001A',
      'bg-subtler-11_critical-disable': '#FBC7C9',
      // bg / subtler / 12_viz
      'bg-subtler-12_viz-normal': '#F6C5FE',
      // bg / subtler / 13_emphasis
      'bg-subtler-13_emphasis-normal': '#C3E4F6',
      'bg-subtler-13_emphasis-hover': '#C3E4F6',
      'bg-subtler-13_emphasis-active': '#008CD6',
      'bg-subtler-13_emphasis-disable': '#C3E4F6',
      // bg / subtlest
      'bg-subtlest-disable': '#EDEDED',
      // bg / subtleste (field) / 0_neutral
      'bg-subtlest-0_neutral-normal': '#FFFFFF',
      'bg-subtlest-0_neutral-hover': '#EDEDED',
      'bg-subtlest-0_neutral-active': '#FFFFFF',
      'bg-subtlest-0_neutral-active_gray': '#FAFAFA',
      // bg / subtlest / 0_neutral_dark
      'bg-subtlest-0_neutral_dark-normal': '#EDEDED',
      'bg-subtlest-0_neutral_dark-hover': '#E6E6E6',
      'bg-subtlest-0_neutral_dark-active': '#FFFFFF',
      // bg / subtlest / 11_critical
      'bg-subtlest-11_critical-normal': '#FFFFFF',
      'bg-subtlest-11_critical-hover': '#FBC7C9',
      'bg-subtlest-11_critical-active': '#FFFFFF',
      // bg / subtlest / 13_emphasis
      'bg-subtlest-13_emphasis-normal': '#FFFFFF',
      'bg-subtlest-13_emphasis-hover': '#C3E4F6',
      'bg-subtlest-13_emphasis-active': '#C3E4F6',
      // bg /table
      'bg-table-row1': '#FAFAFA',
      'bg-table-row2': '#FFFFFF',
      'bg-table-hover': '#E6E6E6',
      'bg-table-active': '#DAEEF9',
      'bg-table-column_header': '#EDEDED',
      /**layer */
      // role
      'layer-frame': '#FFFFFF',
      'layer-header': '#FFFFFF',
      'layer-menu': '#F0F0F0',
      'layer-title': '#FAFAFA',
      'layer-mask': 'rgba(50, 50, 51, 0.5)',
      'layer-inverse': '#555555',
      // layer / dashboard
      'layer-dashboard-main': '#FAFAFA',
      // layer / dialog
      'layer-dialog-frame': '#FFFFFF',
      // layer / divider
      'layer-divider-0_neutral': '#C8C8C8',
      'divider-0_neutral-dark': 'rgba(50, 50, 51, 0.5)',
      'layer-divider-2_emphasis': '#008CD6',
      'layer-divider-column_header': '#0078B7',
      'layer-shadow-dropdown': 'rgba(50, 50, 51, 0.25)'
    }
  },
  [THEME_KEY.themeNames.darkTheme]: {
    id: THEME_KEY.themeNames.darkTheme,
    data: {
      /**icon */
      // icon / on_strong
      'icon-on_strong': '#151D24',
      // icon / on_subtle / 0_neutral
      'icon-on_subtle-0_neutral-normal': '#85969B',
      'icon-on_subtle-0_neutral-hover': '#85969B',
      'icon-on_subtle-0_neutral-active': '#5AC8FA',
      'icon-on_subtle-0_neutral-active_on_strong': '#151D24',
      'icon-on_subtle-0_neutral-disable': '#51646B',
      // icon / on_subtle /0_neutral_dark
      'icon-on_subtle-0_neutral_dark-normal': '#B9C1C4',
      'icon-on_subtle-0_neutral_dark-hover': '#B9C1C4',
      'icon-on_subtle-0_neutral_dark-active': '#5AC8FA',
      'icon-on_subtle-0_neutral_dark-active-on-strong': '#151D24',
      'icon-on_subtle-0_neutral_dark-disable': 'rgba(81, 100, 107, 0.6)',
      // icon / on_subtle /0_neutral_cool
      'icon-on_subtle-0_neutral_cool-normal': '#9FA7B7',
      'icon-on_subtle-0_neutral_cool-hover': '#64C9FA',
      'icon-on_subtle-0_neutral_cool-active': '#5AC8FA',
      'icon-on_subtle-0_neutral_cool-active-on-strong': '#151D24',
      'icon-on_subtle-0_neutral_cool-disable': 'rgba(81, 100, 107, 0.6)',
      // icon / on_subtle / 1_info
      'icon-on_subtle-1_info-normal': '#3381D6',
      'icon-on_subtle-1_info-hover': '#6DA5E1',
      'icon-on_subtle-1_info-active': '#151D24',
      'icon-on_subtle-1_info-disable': '#245C98',
      // icon / on_subtle /2_success
      'icon-on_subtle-2_success-normal': '#00B900',
      'icon-on_subtle-2_success-hover': '#6DD76D',
      'icon-on_subtle-2_success-active': '#151D24',
      'icon-on_subtle-2_success-disable': '#248E24',
      // icon / on_subtle / 3_warning
      'icon-on_subtle-3_warning-normal': '#FF9300',
      'icon-on_subtle-3_warning-hover': '#FFB148',
      'icon-on_subtle-3_warning-active': '#151D24',
      'icon-on_subtle-3_warning-disable': '#B66900',
      // icon / on_subtle / 4_caution
      'icon-on_subtle-4_caution-normal': '#EFCD6C',
      'icon-on_subtle-4_caution-hover': '#F8E9C0',
      'icon-on_subtle-4_caution-active': '#151D24',
      'icon-on_subtle-4_caution-disable': '#AA924D',
      // icon / on_subtle / 6_viz
      'icon-on_subtle-6_viz-normal': '#996DD3',
      'icon-on_subtle-6_viz-hover': '#B696DF',
      'icon-on_subtle-6_viz-active': '#151D24',
      'icon-on_subtle-6_viz-disable': '#6D4D96',
      // icon / on_subtle / 9_viz
      'icon-on_subtle-9_viz-normal': '#B9DA33',
      'icon-on_subtle-9_viz-hover': '#CDE46D',
      'icon-on_subtle-9_viz-active': '#151D24',
      'icon-on_subtle-9_viz-disable': '#849B24',
      // icon / on_subtle / 10_viz
      'icon-on_subtle-10_viz-normal': '#03FFA4',
      'icon-on_subtle-10_viz-hover': '#4BFFBE',
      'icon-on_subtle-10_viz-active': '#151D24',
      'icon-on_subtle-10_viz-disable': '#02B675',
      // icon / on_subtle /11_critical
      'icon-on_subtle-11_critical-normal': '#E53348',
      'icon-on_subtle-11_critical-hover': '#EC6676',
      'icon-on_subtle-11_critical-active': '#F3A7B0',
      'icon-on_subtle-11_critical-active-on-strong': '#151D24',
      'icon-on_subtle-11_critical-disable': '#A32433',
      // icon / on_subtle /13_emphasis
      'icon-on_subtle-13_emphasis-normal': '#5AC8FA',
      'icon-on_subtle-13_emphasis-hover': '#89D7FB',
      'icon-on_subtle-13_emphasis-active': '#5AC8FA',
      'icon-on_subtle-13_emphasis-active-on-strong': '#151D24',
      'icon-on_subtle-13_emphasis-disable': '#51646B',
      'icon-on_subtle-13_brand-normal': '#5AC8FA', // TODO: 色指标没有，进行添加
      /**text */
      // role
      'text-primary': '#B9C1C4',
      'text-secondary': '#85969B',
      'text-disable': '#51646B',
      'text-on_strong': '#151D24',
      // text / on_subtle / 0_neutral
      'text-on_subtle-0_neutral-normal': '#85969B',
      'text-on_subtle-0_neutral-hover': '#85969B',
      'text-on_subtle-0_neutral-active': '#5AC8FA',
      'text-on_subtle-0_neutral-active-on_strong': '#151D24',
      'text-on_subtle-0_neutral-disable': 'rgba(81, 100, 107, 0.6)',
      // text / on_subtle / 0_neutral_dark
      'text-on_subtle-0_neutral_dark-normal': '#B9C1C4',
      'text-on_subtle-0_neutral_dark-hover': '#85969B',
      'text-on_subtle-0_neutral_dark-active': '#5AC8FA',
      'text-on_subtle-0_neutral_dark-active-on_strong': '#151D24',
      'text-on_subtle-0_neutral_dark-disable': 'rgba(81, 100, 107, 0.6)',
      // text / on_subtle / 1_info
      'text-on_subtle-1_info-normal': '#3381D6',
      'text-on_subtle-1_info-hover': '#6DA5E1',
      'text-on_subtle-1_info-active-on_strong': '#151D24',
      'text-on_subtle-1_info-disable': '#245C98',
      // text / on_subtle / 2_success
      'text-on_subtle-2_success-normal': '#33C733',
      'text-on_subtle-2_success-hover': '#6DD76D',
      'text-on_subtle-2_success-active-on_strong': '#151D24',
      'text-on_subtle-2_success-disable': '#248E24',
      // text / on_subtle / 3_warning
      'text-on_subtle-3_warning-normal': '#FF9300',
      'text-on_subtle-3_warning-hover': '#FFB148',
      'text-on_subtle-3_warning-active-on_strong': '#151D24',
      'text-on_subtle-3_warning-disable': '#B66900',
      // text / on_subtle / 4_caution
      'text-on_subtle-4_caution-normal': '#EFCD6C',
      'text-on_subtle-4_caution-hover': '#F8E9C0',
      'text-on_subtle-4_caution-active-on_strong': '#151D24',
      'text-on_subtle-4_caution-disable': '#AA924D',
      // text / on_subtle / 5_viz
      'text-on_subtle-5_viz-normal': '#FF80AB',
      // text / on_subtle / 6_viz
      'text-on_subtle-6_viz-normal': '#996DD3',
      'text-on_subtle-6_viz-hover': '#B696DF3',
      'text-on_subtle-6_viz-active-on_strong': '#151D24',
      'text-on_subtle-6_viz-disable': '#6D4D96',
      // text / on_subtle / 7_viz
      'text-on_subtle-7_viz-normal': '#809BEB',
      // text / on_subtle /8_viz
      'text-on_subtle-8_viz-normal': '#64C9FA',
      // text / on_subtle / 9_viz
      'text-on_subtle-9_viz-normal': '#B9DA33',
      'text-on_subtle-9_viz-hover': '#CDE46D',
      'text-on_subtle-9_viz-active-on_strong': '#151D24',
      'text-on_subtle-9_viz-disable': '#849B24',
      // text / on_subtle / 10_viz
      'text-on_subtle-10_viz-normal': '#03FFA4',
      'text-on_subtle-10_viz-hover': '#4BFFBE',
      'text-on_subtle-10_viz-active-on_strong': '#151D24',
      'text-on_subtle-10_viz-disable': '#02B675',
      // text / on_subtle / 11_critical
      'text-on_subtle-11_critical-normal': '#E53348',
      'text-on_subtle-11_critical-hover': '#EC6676',
      'text-on_subtle-11_critical-active': '#F3A7B0',
      'text-on_subtle-11_critical-active-on_strong': '#151D24',
      'text-on_subtle-11_critical-disable': '#A32433',
      // text / on_subtle / 12_viz
      'text-on_subtle-12_viz-normal': '#DF33FA',
      // text / on_subtle /13_emphasis
      'text-on_subtle-13_emphasis-normal': '#5AC8FA',
      'text-on_subtle-13_emphasis-hover': '#89D7FB',
      'text-on_subtle-13_emphasis-active': '#5AC8FA',
      'text-on_subtle-13_emphasis-active_on_strong': '#151D24',
      'text-on_subtle-13_emphasis-disable': '#151D24',
      /**bdr */
      // Role
      'bdr-main': '#151D24',
      // bdr / strong
      'bdr-strong-disabled': 'rgba(81, 100, 107, 0.6)',
      // bdr / strong / 0_neutral
      'bdr-strong-0_neutral-normal': '#85969B',
      'bdr-strong-0_neutral-hover': '#B9C1C4',
      'bdr-strong-0_neutral-active': '#5AC8FA',
      'bdr-strong-0_neutral-disable': '#5AC8FA',
      // bdr / strong / 1_info
      'bdr-strong-1_info-normal': '#3381D6',
      'bdr-strong-1_info-hover': '#6DA5E1',
      'bdr-strong-1_info-active': '#3381D6',
      // bdr / strong / 2_success
      'bdr-strong-2_success-normal': '#33C733',
      'bdr-strong-2_success-hover': '#33C733',
      'bdr-strong-2_success-active': '#33C733',
      // bdr / strong / 3_warning
      'bdr-strong-3_warning-normal': '#FF9300',
      'bdr-strong-3_warning-hover': '#FFB148',
      'bdr-strong-3_warning-active': '#FF9300',
      // bdr / strong / 4_caution
      'bdr-strong-4_caution-normal': '#EFCD6C',
      'bdr-strong-4_caution-hover': '#F3DB96',
      'bdr-strong-4_caution-active': '#EFCD6C',
      // bdr / strong / 5_viz
      'bdr-strong-5_viz-normal': '#FF80AB',
      'bdr-strong-5_viz-hover': '#FFA4C3',
      'bdr-strong-5_viz-active': '#FF80AB',
      // bdr / strong / 6_viz
      'bdr-strong-6_viz-normal': '#996DD3',
      'bdr-strong-6_viz-hover': '#B696DF',
      'bdr-strong-6_viz-active': '#996DD3',
      // bdr / strong / 7_viz
      'bdr-strong-7_viz-normal': '#809BEB',
      // bdr / strong / 8_viz
      'bdr-strong-8_viz-normal': '#64C9FA',
      'bdr-strong-8_viz-hover': '#90D8FB',
      'bdr-strong-8_viz-active': '#64C9FA',
      // bdr / strong / 9_viz
      'bdr-strong-9_viz-normal': '#B9DA33',
      // bdr / strong / 10_viz
      'bdr-strong-10_viz-normal': '#03C982',
      // bdr / strong /11_critical
      'bdr-strong-11_critical-normal': '#E53348',
      'bdr-strong-11_critical-hover': '#EC6676',
      'bdr-strong-11_critical-active': '#E53348',
      'bdr-strong-11_critical-disable': '#A32433',
      // bdr / strong /12_viz
      'bdr-strong-12_viz-normal': '#DF33FA',
      // bdr / strong / 13_emphasis
      'bdr-strong-13_emphasis-normal': '#5AC8FA',
      'bdr-strong-13_emphasis-hover': '#89D7FB',
      'bdr-strong-13_emphasis-active': '#5AC8FA',
      'bdr-strong-13_emphasis-disable': '#243648',
      // bdr /subtle
      'bdr-subtle-disable': 'rgba(81, 100, 107, 0.6)',
      // bdr /subtle / 0_neutral
      'bdr-subtle-0_neutral-normal': '#51646B',
      'bdr-subtle-0_neutral-hover': '#85969B',
      'bdr-subtle-0_neutral-active': '#5AC8FA',
      // bdr /subtle / 6_critical
      'bdr-subtle-6_critical-normal': '#E53348',
      'bdr-subtle-6_critical-hover': '#E53348',
      'bdr-subtle-6_critical-active': '#EC6676',
      // bdr /subtle / 7_warning
      'bdr-subtle-7_warning-normal': '#FF9300',
      // bdr /subtle / 9_success
      'bdr-subtle-9_success-normal': '#33C733',
      /**bg */
      // bg / strong / 0_neutral
      'bg-strong-0_neutral-normal': '#85969B',
      'bg-strong-0_neutral-hover': 'rgba(81, 100, 107, 0.6)',
      'bg-strong-0_neutral-active': '#5AC8FA',
      'bg-strong-0_neutral-disable': 'rgba(81, 100, 107, 0.6)',
      // bg / strong / 1_info
      'bg-strong-1_info-normal': '#3381D6',
      'bg-strong-1_info-disable': '#1D497A',
      // bg / strong / 2_succcess
      'bg-strong-2_success-400_normal': '#33C733',
      'bg-strong-2_success-400_hover': '#248E24',
      'bg-strong-2_success-400_active': '#A7E7A7',
      'bg-strong-2_success-100_disable': '#1D711D',
      // bg / strong / 3_warning
      'bg-strong-3_warning-400_normal': '#FF9300',
      'bg-strong-3_warning-100_disable': '#915400',
      // bg / strong / 4_caution
      'bg-strong-4_caution-400_normal': '#EFCD6C',
      'bg-strong-4_caution-disable': '#CCAF5C',
      // bg / strong / 5_viz
      'bg-strong-5_viz-400_normal': '#FF80AB',
      'bg-strong-5_viz-100_disable': '#914961',
      // bg / strong / 6_viz
      'bg-strong-6_viz-400_normal': '#996DD3',
      'bg-strong-6_viz-100_disable': '#5F4483',
      // bg / strong / 7_viz
      'bg-strong-7_viz-400_normal': '#809BEB',
      'bg-strong-7_viz-100_disable': '#36436A',
      // bg / strong / 8_viz
      'bg-strong-8_viz-400_normal': '#64C9FA',
      'bg-strong-8_viz-100_disable': '#39728E',
      // bg / strong / 9_viz
      'bg-strong-9_viz-400_normal': '#B9DA33',
      'bg-strong-9_viz-100_disable': '#697C1D',
      // bg / strong / 10_viz
      'bg-strong-10_viz-400_normal': '#03FFA4',
      'bg-strong-10_viz-100_disable': '#01915D',
      // bg / strong / 11_critical
      'bg-strong-11_critical-400_normal': '#E53348',
      'bg-strong-11_critical-hover': '#93212F',
      'bg-strong-11_critical-active': '#E53348',
      'bg-strong-11_critical-disable': '#A32433',
      // bg / strong / 12_viz
      'bg-strong-12_viz-400_normal': '#DF33FA',
      'bg-strong-12_viz-100_disable': '#8A19AA',
      // bg / strong / 13_emphasis
      'bg-strong-13_emphasis-normal': '#5AC8FA',
      'bg-strong-13_emphasis-hover': '#408EB2',
      'bg-strong-13_emphasis-active': '#5AC8FA',
      'bg-strong-13_emphasis-disable': '#2B3B4B',
      // bg / subtler
      'bg-subtler-normal-btn': '#151D24',
      // bg / subtler / 0_neutral
      'bg-subtler-0_neutral-normal': 'rgba(81, 100, 107, 0.4)',
      'bg-subtler-0_neutral-hover': 'rgba(81, 100, 107, 0.6)',
      'bg-subtler-0_neutral-active': '#5AC8FA',
      'bg-subtler-0_neutral-disable': 'rgba(81, 100, 107, 0.4)',
      // bg / subtler / 1_info
      'bg-subtler-1_info-normal': '#215287',
      'bg-subtler-1_info-hover': '#215287',
      'bg-subtler-1_info-active': '#3381D6',
      'bg-subtler-1_info-disable': '#215287',
      // bg / subtler / 2_success
      'bg-subtler-2_success-normal': '#1D711D',
      'bg-subtler-2_success-hover': '#1D711D',
      'bg-subtler-2_success-active': '#33C733',
      'bg-subtler-2_success-disable': '#1D711D',
      // bg / subtler / 3_warning
      'bg-subtler-3_warning-normal': '#915400',
      'bg-subtler-3_warning-hover': '#915400',
      'bg-subtler-3_warning-active': '#FF9300',
      'bg-subtler-3_warning-disable': '#915400',
      // bg / subtler / 4_caution
      'bg-subtler-4_caution-normal': '#88753D',
      'bg-subtler-4_caution-hover': '#88753D',
      'bg-subtler-4_caution-active': '#EFCD6C',
      'bg-subtler-4_caution-disable': '#88753D',
      // bg / subtler / 5_viz
      'bg-subtler-5_viz-normal': '#914961',
      // bg / subtler / 6_viz
      'bg-subtler-6_viz-normal': '#5F4483',
      'bg-subtler-6_viz-hover': '#5F4483',
      'bg-subtler-6_viz-active': '#996DD3',
      'bg-subtler-6_viz-disable': '#8A19AA',
      // bg / subtler / 7_viz
      'bg-subtler-7_viz-normal': '#36436A',
      // bg / subtler / 8_viz
      'bg-subtler-8_viz-normal': '#39728E',
      // bg / subtler / 9_viz
      'bg-subtler-9_viz-normal': '#697C1D',
      'bg-subtler-9_viz-hover': '#697C1D',
      'bg-subtler-9_viz-active': '#B9DA33',
      'bg-subtler-9_viz-disable': '#697C1D',
      // bg / subtler / 10_viz
      'bg-subtler-10_viz-normal': '#01915D',
      'bg-subtler-10_viz-hover': '#01915D',
      'bg-subtler-10_viz-active': '#03FFA4',
      'bg-subtler-10_viz-disable': '#01915D',
      // bg / subtler / 11_critical
      'bg-subtler-11_critical-normal': '#93212F',
      'bg-subtler-11_critical-hover': '#93212F',
      'bg-subtler-11_critical-active': '#E53348',
      'bg-subtler-11_critical-disable': '#93212F',
      // bg / subtler / 12_viz
      'bg-subtler-12_viz-normal': '#8A19AA',
      // bg / subtler / 13_emphasis
      'bg-subtler-13_emphasis-normal': '#2B3B4B',
      'bg-subtler-13_emphasis-hover': '#2B3B4B',
      'bg-subtler-13_emphasis-active': '#5AC8FA',
      'bg-subtler-13_emphasis-disable': '#243648',
      // bg / subtlest
      'bg-subtlest-disable': 'rgba(81, 100, 107, 0.4)',
      // bg / subtleste (field) / 0_neutral
      'bg-subtlest-0_neutral-normal': '#151D24',
      'bg-subtlest-0_neutral-hover': 'rgba(81, 100, 107, 0.4)',
      'bg-subtlest-0_neutral-active': '#151D24',
      'bg-subtlest-0_neutral-active_gray': 'rgba(95, 117, 162, 0.1)',
      // bg / subtlest / 0_neutral_dark
      'bg-subtlest-0_neutral_dark-normal': 'rgba(81, 100, 107, 0.4)',
      'bg-subtlest-0_neutral_dark-hover': 'rgba(81, 100, 107, 0.6)',
      'bg-subtlest-0_neutral_dark-active': '#151D24',
      // bg / subtlest / 11_critical
      'bg-subtlest-11_critical-normal': '#151D24',
      'bg-subtlest-11_critical-hover': '#93212F',
      'bg-subtlest-11_critical-active': '#151D24',
      // bg / subtlest / 13_emphasis
      'bg-subtlest-13_emphasis-normal': '#151D24',
      'bg-subtlest-13_emphasis-hover': '#2B3B4B',
      'bg-subtlest-13_emphasis-active': '#2B3B4B',
      // bg /table
      'bg-table-row1': 'rgba(95, 117, 162, 0.1)',
      'bg-table-row2': 'rgba(0, 0, 0, 0.05)',
      'bg-table-hover': 'rgba(81, 100, 107, 0.6)',
      'bg-table-active': '#2B3B4B',
      'bg-table-column_header': 'rgba(81, 100, 107, 0.4)',
      /**layer */
      // role
      'layer-frame': 'radial-gradient(94.68% 94.68% at 50% 5.32%, #263743 0%, #000 100%)',
      'layer-header': '#151D24',
      'layer-menu': 'linear-gradient(180deg, #24313F 0%, #141B27 100%)',
      'layer-title': 'rgba(95, 117, 162, 0.1)',
      'layer-mask': 'rgba(0, 0, 0, 0.5)',
      'layer-inverse': '#9FACB0',
      // layer / dashboard
      'layer-dashboard-main': 'rgba(95, 117, 162, 0.1)',
      // layer / dialog
      'layer-dialog-frame': '#17293C',
      // layer / divider
      'layer-divider-0_neutral': '#51646B',
      'divider-0_neutral-dark': 'rgba(185, 193, 196, 0.4)',
      'layer-divider-2_emphasis': '#5AC8FA',
      'layer-divider-column_header': '#89D7FB',
      'layer-shadow-dropdown': 'rgba(21, 29, 36, 0.25)'
    }
  }
}

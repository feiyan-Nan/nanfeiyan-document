import Vue from 'vue'

import '../../../_source'
import Highlight from '@/components/Highlight'
import View from '@/components/View'
import Tag from '@/components/Tag'
import PropList from '@/components/PropList'
import EventList from '@/components/EventList'
import MethodList from '@/components/MethodList'
import SlotList from '@/components/SlotList'
import DocItem from '@/components/DocItem'

const components = [
  Highlight, View, Tag, PropList, EventList, DocItem, MethodList, SlotList
]

components.map(component => {
  if (component.name) {
    Vue.component(component.name, component)
  }
})

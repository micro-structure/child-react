import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

const h = React.createElement

_MICRO_APP_CONFIG.addReactRoutes(
  h(Fragment, null, [
    h(Route, { path: '/second/order/latest' }, '最近订单'),
    h(Route, { path: '/second/order/back' }, '退款售后'),
    h(Route, { path: '/second/jifen' }, '我的积分')
  ])
)

import React from 'react'
import { Layout } from 'antd'
import '../../assets/css/header.css'

const { Header: AntHeader } = Layout

export default function Header() {
    return <AntHeader className='header'>لیست کار ها </AntHeader>
}
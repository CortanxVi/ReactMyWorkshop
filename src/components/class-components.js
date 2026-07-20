import React, {Component} from 'react'

export default class Calendar extends Component{
    getDate(){
        const dayNames = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
        const monthNames = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม',
                            'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear() + 543
        return `วัน${weekDay} ที่ ${day} ${month} ${year}` // มองเป็น JS ปกติดังนั้นใช้ ${} ในการเรียกใช้ตัวแปร
    }
    render(){
        // การเขียนแบบ JSX คือเขียน HTML ใน JS ดังนั้นการเรียกใช้ตัวแปรจะใช้แค่ {} ไม่ต้องมี $
        return <div>{this.getDate()}</div>
    }
}
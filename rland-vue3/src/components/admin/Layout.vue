
import { RouterView } from 'vue-router';

<template>
<header>
    <h1>관리자 페이지 헤더</h1>
    <ul>
        <li><router-link to="category/list">카테고리관리</router-link></li>
        <li><router-link to="menu/list">메뉴관리</router-link></li>
    </ul>
</header>

<router-view></router-view>

<footer>
    footer
</footer>
</template>
<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <main class="language-chooser" aria-labelledby="language-title">
    <p class="terminal-overline">SELECT_LANGUAGE</p>
    <h1 id="language-title">Computer Science Notes<br>计算机科学笔记</h1>
    <div class="language-options">
      <a :href="withBase('/en/')" lang="en">
        <span>EN</span>
        <strong>English</strong>
      </a>
      <a :href="withBase('/zh/')" lang="zh-CN">
        <span>中</span>
        <strong>中文</strong>
      </a>
    </div>
  </main>
</template>

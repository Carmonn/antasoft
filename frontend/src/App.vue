<template>
  <v-app>
    <v-layout>
      <v-main>
        <router-view v-slot="{ Component, route }">
          <v-fade-transition :hide-on-leave="true">
            <div :key="route.name || 'default-key'" :class="['pa-2']">
              <component :is="Component"></component>
            </div>
          </v-fade-transition>
        </router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

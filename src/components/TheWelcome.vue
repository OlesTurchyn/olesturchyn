<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Geography Project</template>
    <a href="https://olesturchyn.github.io/GeoTestVue/" target="_blank" rel="noopener">GeoTest.io</a>
    is a small web project that was built with the intention of 
    practicing some software engineering skills while studying geography.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>GitHub</template>

    This project is managed and hosted on my
    <a href="https://github.com/OlesTurchyn" target="_blank" rel="noopener">GitHub</a> repo. Please check it out to 
    see some of my other projects!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Linkedin</template>

    See my <a href="https://www.linkedin.com/in/oleksander-turchyn/" target="_blank" rel="noopener">Linkedin</a> 
    for more info about my work experience and education. 
    
  </WelcomeItem>


    <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Photography</template>
    I love to learn and practice photography when I travel.   
    <a href="https://olesturchyn.github.io/photography/" target="_blank" rel="noopener">Here</a> are some of my favourite photos and memories.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Contact</template>

    If you'd like to get in touch, please reach out to me by 
    <a href="mailto: oleksander.turchyn@gmail.com" target="_blank" rel="noopener">email</a>.
  </WelcomeItem>


</template>

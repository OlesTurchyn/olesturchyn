<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>

  <WelcomeItem>
    <template #icon>
      <a href="https://github.com/OlesTurchyn">
        <ToolingIcon />
      </a>
    </template>
    <template #heading><a href="https://github.com/OlesTurchyn">
        GitHub
      </a></template>

    This project is managed and hosted on my
    <a href="https://github.com/OlesTurchyn" target="_blank" rel="noopener">GitHub</a> repo. Please check it out to 
    see some of my other projects!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <a href="https://www.linkedin.com/in/oleksander-turchyn/">
        <EcosystemIcon />
      </a>
    </template>
    <template #heading> <a href="https://www.linkedin.com/in/oleksander-turchyn/">
        Linkedin
      </a></template>

    See my <a href="https://www.linkedin.com/in/oleksander-turchyn/" target="_blank" rel="noopener">Linkedin</a> 
    for more info about my work experience and education. 
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
    <a href="mailto:oturc030@uottawa.ca">
      <CommunityIcon />
    </a>
    </template>
    <template #heading><a href="mailto:oturc030@uottawa.ca">
      Contact
    </a></template>

    If you'd like to get in touch, please reach out to me by 
    <a href="mailto: oturc030@uottawa.ca" target="_blank" rel="noopener">email</a>.
  </WelcomeItem>

</template>



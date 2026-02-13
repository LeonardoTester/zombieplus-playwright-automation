// @ts-check
const { test, expect } = require('@playwright/test');

const { LandingPage } = require('../pages/LandingPage')

let landingPage

test.beforeEach(async ({ page }) => {
  landingPage = new LandingPage(page)
})

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.submitLeadForm('Leonardo', 'leoanrdo@gmail.com')

  const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'
  await landingPage.toastHaveText(message)
});

test('nao deve cadastrar quando o email é incorreto', async ({ page }) => {
  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.submitLeadForm('Leonardo', 'leoanrdo.gmail.com')

  await landingPage.alertHaveText('Email incorreto')
});

test('nao deve casdastrar quando o nome não é preenchido', async ({ page }) => {
  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.submitLeadForm('', 'leoteste@gmail.com')

  await landingPage.alertHaveText('Campo obrigatório')
});

test('nao deve casdastrar quando o email não é preenchido', async ({ page }) => {
  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.submitLeadForm('Leonardo', '')

  await landingPage.alertHaveText('Campo obrigatório')
});

test('nao deve casdastrar quando o nome e email não é preenchido', async ({ page }) => {
  await landingPage.visit()
  await landingPage.openLeadModal()
  await landingPage.submitLeadForm('', '')

  await landingPage.alertHaveText([
    'Campo obrigatório',
    'Campo obrigatório'
  ])

});
// @ts-check
const { test, expect } = require('@playwright/test');
const { LadingPage } = require('./pages/LandingPage')


test('deve cadastrar um lead na fila de espera' , async ({ page }) => {
  const landingPage = new LadingPage(page)

   await landingPage.visit()
   await landingPage.openLeadModal()
   await landingPage.submitLeadForm('Leonardo', 'leoanrdo@gmail.com')

   const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'
   await landingPage.toastHaveText(message)
 
});

test('nao deve cadastrar quando o email é incorreto' , async ({ page }) => {
   const landingPage = new LadingPage(page)

   await landingPage.visit()
   await landingPage.openLeadModal()
   await landingPage.submitLeadForm('Leonardo', 'leoanrdo.gmail.com')

  await expect(page.locator('.alert')).toHaveText('Email incorreto')
});

test('nao deve casdastrar quando o nome não é preenchido' , async ({ page }) => {
   const landingPage = new LadingPage(page)

   await landingPage.visit()
   await landingPage.openLeadModal()
   await landingPage.submitLeadForm('', 'leoteste@gmail.com')

  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
});

test('nao deve casdastrar quando o email não é preenchido' , async ({ page }) => {
   const landingPage = new LadingPage(page)

   await landingPage.visit()
   await landingPage.openLeadModal()
   await landingPage.submitLeadForm('Leonardo', '')

  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
});

test('nao deve casdastrar quando o nome e email não é preenchido' , async ({ page }) => {
   const landingPage = new LadingPage(page)

   await landingPage.visit()
   await landingPage.openLeadModal()
   await landingPage.submitLeadForm('', '')

  await expect(page.locator('.alert')).toHaveText([
    'Campo obrigatório',
    'Campo obrigatório'
  ])

});
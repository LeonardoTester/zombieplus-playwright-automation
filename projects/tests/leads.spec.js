// @ts-check
import { test, expect } from '@playwright/test';

test('deve cadastrar um lead na fila de espera' , async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: /Aperte o play/ }).click()

  await expect(page.getByTestId('modal').getByRole('heading')) // checkpoint
  .toHaveText('Fila de espera')

  // await page.locator('input[placeholder="Seu nome completo"]').fill('leo@gmail.com')

  await page.getByPlaceholder('Seu nome completo').fill('leo')
  await page.getByPlaceholder('Seu email principal').fill('leo@gmail.com')

  await page.getByTestId('modal')
  .getByText('Quero entrar na fila!').click()

  /** await page.getByText('seus dados conosco').click() // técnica para pausar o elemento flutuante, é temporário. 
  const content = await page.content()
  console.log(content) // abra o console dentro da interface e use código HTML **/

  const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'

  await expect(page.locator('.toast')).toHaveText(message)

  await expect(page.locator('.toast')).toBeHidden({timeout: 5000})

});

test('não deve cadastrar quando o email é incorreto' , async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: /Aperte o play/ }).click()

  await expect(page.getByTestId('modal').getByRole('heading')) // checkpoint
  .toHaveText('Fila de espera')

  await page.getByPlaceholder('Seu nome completo').fill('leo')
  await page.getByPlaceholder('Seu email principal').fill('leogmailcom')

  await page.getByTestId('modal')
  .getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText('Email incorreto')
});

test('nao deve casdastrar quando o email não é preenchido' , async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: /Aperte o play/ }).click()

  await expect(page.getByTestId('modal').getByRole('heading')) // checkpoint
  .toHaveText('Fila de espera')

  await page.getByPlaceholder('Seu nome completo').fill('leo')

  await page.getByTestId('modal')
  .getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
});

test('nao deve casdastrar quando o nome e email não é preenchido' , async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: /Aperte o play/ }).click()

  await expect(page.getByTestId('modal').getByRole('heading')) // checkpoint
  .toHaveText('Fila de espera')

  await page.getByTestId('modal')
  .getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText([
    'Campo obrigatório',
    'Campo obrigatório'
  ])
  
});
# Projeto Benefícios

Página web simples para exibir informações de benefícios.

## Estrutura do projeto

- `benefits.html`: página principal
- `benefits.css`: estilos da página
- `scripts/script.js`: comportamentos em JavaScript
- `imagens/` e `icones/`: arquivos visuais
- `index.php`: ponto de entrada alternativo em ambiente com PHP

## Como rodar localmente

Você pode rodar de 3 formas:

### Opção 1 (mais simples): abrir o HTML direto

1. Baixe/clonar o repositório.
2. Abra o arquivo `benefits.html` no navegador.

> Observação: dependendo do navegador, algumas funcionalidades podem funcionar melhor usando servidor local (opções 2 ou 3).

---

### Opção 2: usar servidor HTTP com PowerShell (Windows)

No PowerShell, dentro da pasta do projeto, execute:

```powershell
$root = (Get-Location).Path
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:5500/")
$listener.Start()
Write-Host "Servidor rodando em http://localhost:5500"

while ($listener.IsListening) {
	$context = $listener.GetContext()
	$requestPath = $context.Request.Url.AbsolutePath.TrimStart('/')
	if ([string]::IsNullOrWhiteSpace($requestPath)) { $requestPath = "benefits.html" }
	$filePath = Join-Path $root $requestPath

	if (Test-Path $filePath -PathType Leaf) {
		$bytes = [System.IO.File]::ReadAllBytes($filePath)
		$ext = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
		switch ($ext) {
			".html" { $contentType = "text/html; charset=utf-8" }
			".css"  { $contentType = "text/css; charset=utf-8" }
			".js"   { $contentType = "application/javascript; charset=utf-8" }
			".png"  { $contentType = "image/png" }
			".jpg"  { $contentType = "image/jpeg" }
			".jpeg" { $contentType = "image/jpeg" }
			".gif"  { $contentType = "image/gif" }
			".svg"  { $contentType = "image/svg+xml" }
			default  { $contentType = "application/octet-stream" }
		}

		$context.Response.ContentType = $contentType
		$context.Response.ContentLength64 = $bytes.Length
		$context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
	} else {
		$context.Response.StatusCode = 404
		$notFound = [System.Text.Encoding]::UTF8.GetBytes("404 - Arquivo não encontrado")
		$context.Response.ContentType = "text/plain; charset=utf-8"
		$context.Response.ContentLength64 = $notFound.Length
		$context.Response.OutputStream.Write($notFound, 0, $notFound.Length)
	}

	$context.Response.OutputStream.Close()
	$context.Response.Close()
}
```

Depois, abra no navegador:

- http://localhost:5500/

---

### Opção 3: usar VS Code + Live Server

1. Instale a extensão **Live Server**.
2. Abra a pasta do projeto no VS Code.
3. Clique com botão direito em `benefits.html` > **Open with Live Server**.

## Requisitos

- Navegador atualizado (Chrome, Edge, Firefox)
- (Opcional) VS Code com extensão Live Server

## Observações

- Se você estiver usando ambiente com PHP (XAMPP/WAMP/IIS), também pode iniciar por `index.php`.
- Em servidor estático, use `benefits.html` como página principal.


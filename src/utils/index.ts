export function copyText(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
  } else {
    const i = document.createElement('input')
    i.value = text
    document.body.appendChild(i)
    i.select()
    document.execCommand('Copy')
    document.body.removeChild(i)
  }
}

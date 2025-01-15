import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

// Company knowledge base
const companyInfo = `
Hero Seguros é uma insurtech que oferece seguros personalizados.
Principais produtos:
- Seguro Viagem: Cobertura internacional, assistência 24h, telemedicina Einstein
- Seguro Celular: Proteção contra roubo, quebra acidental
Diferenciais:
- Atendimento 24h trilíngue
- Reembolso em até 72h
- Parceria com salas VIP em aeroportos
- +1.7 milhão de clientes segurados
- +120 mil bilhetes emitidos por mês
- +4 mil agências parceiras
Valores:
- Foco na experiência do cliente
- Inovação e tecnologia
- Simplicidade e agilidade
`

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    messages: [
      {
        role: 'system',
        content: `Você é um assistente virtual da Hero Seguros. Use estas informações para suas respostas:
        ${companyInfo}
        
        Diretrizes:
        - Seja amigável e profissional
        - Responda apenas sobre a Hero Seguros e seus produtos/serviços
        - Se não souber algo, diga que vai encaminhar para um atendente
        - Mantenha respostas concisas e claras
        - Use emojis ocasionalmente para um tom mais leve
        `
      },
      ...messages
    ],
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}


'use client'

import { useChat } from 'ai/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send } from 'lucide-react'

export function ChatSection() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  return (
    <section className="py-16 px-12 bg-[#13111B]">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="bg-gradient-to-r from-[#d80073] to-[#6e00b2] text-transparent bg-clip-text font-semibold mb-4">ATENDIMENTO HERO</h2>
            <h3 className="text-3xl font-bold text-white mb-4">
              Como posso ajudar você hoje?
            </h3>
            <p className="text-gray-400">
              Converse com a Sofia nossa assistente virtual e tire suas dúvidas sobre nossos produtos e serviços
            </p>
          </div>

          <Card className="bg-purple-900/50 border-purple-800">
            <div className="flex flex-col h-[500px]">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-400 mt-8">
                    👋 Olá! Sou a Sofia, assistente virtual da Hero Seguros. Como posso te ajudar?
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`rounded-lg px-4 py-2 max-w-[80%] ${
                          message.role === 'user'
                            ? 'bg-pink-600 text-white'
                            : 'bg-purple-800 text-gray-100'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-purple-800 text-gray-100 rounded-lg px-4 py-2">
                      Digitando...
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t border-purple-800">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-purple-900/50 border-purple-800 text-white placeholder:text-gray-400"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    className="bg-pink-600 hover:bg-pink-700"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Enviar mensagem</span>
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}


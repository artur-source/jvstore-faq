import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './App.css';

const faqData = [
  {
    category: 'Tamanhos e Medidas',
    questions: [
      {
        title: 'Como saber qual tamanho me serve?',
        answer: 'Cada produto tem uma tabela de medidas. Recomendamos medir uma roupa que você já usa e comparar com a tabela. Mostramos também a altura e tamanho que o modelo veste para referência visual.',
      },
      {
        title: 'Posso devolver se o tamanho não servir?',
        answer: 'Sim! Oferecemos primeira troca grátis se o tamanho não servir. Basta entrar em contato conosco no WhatsApp ou email dentro de 7 dias após receber.',
      },
      {
        title: 'Vocês enviam para fora do Brasil?',
        answer: 'No momento, entregamos apenas em São Paulo e região metropolitana. Consulte a zona de entrega no checkout.',
      },
    ],
  },
  {
    category: 'Pedidos e Entrega',
    questions: [
      {
        title: 'Qual é o prazo de entrega?',
        answer: 'Postagem até 24 horas após confirmação do pagamento. Entrega de 2 a 5 dias úteis, dependendo da zona. Prazos especiais podem ser consultados no checkout.',
      },
      {
        title: 'Como rastrear meu pedido?',
        answer: 'Após o envio, você receberá um email com o código de rastreamento. Você pode acompanhar pelo link enviado ou entrar em contato conosco com o número do pedido.',
      },
      {
        title: 'Qual é o custo do frete?',
        answer: 'O frete varia por zona: Local R$ 10, Próxima 1 R$ 15, Próxima 2 R$ 20, Regional R$ 28, Estendida R$ 35.',
      },
    ],
  },
  {
    category: 'Cupons e Descontos',
    questions: [
      {
        title: 'Como usar um cupom de desconto?',
        answer: 'No checkout, na seção "Cupom de Desconto", digite o código e clique em "Aplicar". O desconto será calculado automaticamente.',
      },
      {
        title: 'Posso usar mais de um cupom?',
        answer: 'Não, apenas um cupom por pedido. Se você tentar aplicar outro, o anterior será removido.',
      },
      {
        title: 'Meu cupom expirou?',
        answer: 'Cupons têm datas de validade. Se o seu cupom não funciona, pode ter expirado. Entre em contato para saber se há cupons ativos no momento.',
      },
    ],
  },
  {
    category: 'Avaliações e Reviews',
    questions: [
      {
        title: 'Como deixar uma avaliação?',
        answer: 'Acesse sua conta, vá para "Meus Pedidos", clique em "Avaliar Produto", escolha uma nota de 1 a 5 estrelas e escreva um comentário (opcional).',
      },
      {
        title: 'Minha avaliação aparece imediatamente?',
        answer: 'Não. Todas as avaliações são revisadas por nossa equipe antes de aparecer no site. Isso garante que apenas avaliações legítimas sejam exibidas.',
      },
      {
        title: 'O que significa "Compra Verificada"?',
        answer: 'Uma avaliação com "Compra Verificada" significa que a pessoa realmente comprou o produto conosco. Essas avaliações têm mais peso e credibilidade.',
      },
    ],
  },
  {
    category: 'Pagamento',
    questions: [
      {
        title: 'Quais são as formas de pagamento?',
        answer: 'Aceitamos Cartão de Crédito (parcelado em até 12x), Pix (à vista com 5% de desconto) e Stripe (cartão internacional).',
      },
      {
        title: 'O pagamento é seguro?',
        answer: 'Sim! Usamos Stripe e Pix com criptografia de ponta a ponta. Seus dados nunca são armazenados em nossos servidores.',
      },
      {
        title: 'Meu pagamento foi recusado. O que fazer?',
        answer: 'Verifique se os dados estão corretos, confirme se há saldo disponível, tente novamente em alguns minutos ou entre em contato conosco.',
      },
    ],
  },
  {
    category: 'Devoluções e Trocas',
    questions: [
      {
        title: 'Qual é a política de devolução?',
        answer: 'Prazo de 7 dias após receber. Primeira troca é grátis. Devoluções adicionais têm frete por conta do cliente.',
      },
      {
        title: 'Como solicitar uma devolução?',
        answer: 'Entre em contato conosco no WhatsApp ou email, informe o número do pedido e motivo. Enviaremos instruções de envio.',
      },
      {
        title: 'Quanto tempo leva para receber o reembolso?',
        answer: 'Após recebermos o produto: Troca em 2-5 dias úteis, Reembolso em 5-10 dias úteis para crédito na conta.',
      },
    ],
  },
];

function App() {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h1>
          <p className="text-lg opacity-90">
            Encontre respostas para as dúvidas mais comuns sobre compras, entrega e produtos.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-primary">
              {section.category}
            </h2>

            <div className="space-y-4">
              {section.questions.map((item, itemIndex) => {
                const itemId = `${sectionIndex}-${itemIndex}`;
                const isExpanded = expandedItems.includes(itemId);

                return (
                  <div
                    key={itemIndex}
                    className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-primary/50"
                  >
                    <button
                      onClick={() => toggleExpand(itemId)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-card/80 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-foreground text-left">
                        {item.title}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 text-primary transition-transform duration-200 flex-shrink-0 ml-4 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="px-6 py-4 bg-background border-t border-border">
                        <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-16 p-8 bg-primary/10 border border-primary/20 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ainda tem dúvidas?</h3>
          <p className="text-muted-foreground mb-6">
            Nossa equipe está pronta para ajudar! Entre em contato conosco:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
            >
              <span>💬 WhatsApp</span>
            </a>
            <a
              href="mailto:contato@jvstore.com.br"
              className="flex items-center gap-3 p-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
            >
              <span>📧 Email</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Atendimento: Segunda a sexta, 9h às 18h
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

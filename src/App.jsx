import { useState } from 'react';
import { ChevronDown, MessageCircle, Mail, Sparkles, ShieldCheck, Truck, ShoppingBag, ArrowLeft } from 'lucide-react';
import './App.css';

const faqData = [
  {
    category: "Tamanhos e Medidas",
    icon: <Sparkles className="w-5 h-5" />,
    questions: [
      {
        q: "Como saber qual tamanho me serve?",
        a: "Temos uma tabela de medidas detalhada em cada página de produto. Recomendamos medir uma peça que você já tenha e comparar com as nossas medidas para garantir o ajuste perfeito."
      },
      {
        q: "Posso devolver se o tamanho não servir?",
        a: "Sim! Oferecemos a primeira troca grátis em até 7 dias após o recebimento, caso o tamanho não seja o ideal."
      }
    ]
  },
  {
    category: "Pedidos e Entrega",
    icon: <Truck className="w-5 h-5" />,
    questions: [
      {
        q: "Qual é o prazo de entrega?",
        a: "O prazo varia de acordo com sua região. Geralmente, pedidos para capitais levam de 3 a 7 dias úteis após a postagem."
      },
      {
        q: "Como rastrear meu pedido?",
        a: "Assim que seu pedido for enviado, você receberá um código de rastreio por e-mail e WhatsApp para acompanhar cada etapa da entrega."
      }
    ]
  },
  {
    category: "Pagamento e Segurança",
    icon: <ShieldCheck className="w-5 h-5" />,
    questions: [
      {
        q: "Quais são as formas de pagamento?",
        a: "Aceitamos Pix (com desconto), Cartão de Crédito em até 12x e Boleto Bancário."
      },
      {
        q: "O pagamento é seguro?",
        a: "Totalmente. Utilizamos tecnologia de criptografia de ponta e processadores de pagamento certificados para garantir que seus dados estejam sempre protegidos."
      }
    ]
  }
];

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="nav-bar">
        <div className="nav-container">
          <a href="https://jvstore.com.br" className="back-link">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Catálogo</span>
          </a>
          <div className="nav-logo">JV STORE</div>
        </div>
      </nav>

      <header className="header-section">
        <div className="badge">
          <Sparkles className="w-4 h-4" />
          <span>Central de Ajuda JV STORE</span>
        </div>
        <h1 className="title">Perguntas Frequentes</h1>
        <p className="subtitle">
          Tudo o que você precisa saber sobre seus pedidos, entregas e produtos em um só lugar.
        </p>
      </header>

      <main className="content-container">
        {faqData.map((section, sIdx) => (
          <div key={sIdx} className="category-section">
            <h2 className="category-title">
              {section.icon}
              {section.category}
            </h2>
            <div className="faq-list">
              {section.questions.map((item, qIdx) => {
                const globalIdx = `${sIdx}-${qIdx}`;
                const isOpen = openIndex === globalIdx;
                return (
                  <div key={qIdx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button 
                      className="faq-trigger"
                      onClick={() => toggleFAQ(globalIdx)}
                    >
                      <span>{item.q}</span>
                      <ChevronDown className="faq-icon w-5 h-5" />
                    </button>
                    {isOpen && (
                      <div className="faq-content">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <section className="footer-section">
          <h2 className="footer-title">Ainda tem dúvidas?</h2>
          <p className="footer-text">Nossa equipe está pronta para te atender agora mesmo.</p>
          <div className="contact-grid">
            <a href="https://wa.me/5511958855631" target="_blank" rel="noreferrer" className="contact-button btn-whatsapp">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a href="https://jvstore.com.br" className="contact-button btn-catalog">
              <ShoppingBag className="w-5 h-5" />
              Ver Catálogo
            </a>
          </div>
          <div className="footer-info">
            <p className="footer-note">
              <strong>Horário de Atendimento:</strong><br />
              Segunda a Sábado: 10h às 19h30
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

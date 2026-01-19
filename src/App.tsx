import { Heart, CheckCircle2, Sparkles, Clock, Salad, ChefHat, Calendar, Flame, Star, X, ArrowRight, Timer, Users, Shield, Lock, Award, TrendingUp, Dumbbell } from 'lucide-react';

function App() {
  const redirectToCheckout = () => {
    window.location.href = 'https://pay.cakto.com.br/8n6d3dd_731498';
  };

  const calculateDaysToCarnaval = () => {
    const carnavalDate = new Date('2026-02-17');
    const today = new Date();
    const diffTime = carnavalDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysToCarnaval = calculateDaysToCarnaval();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Scarcity Banner */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-3 px-4 z-50 shadow-lg animate-pulse">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm md:text-base font-bold flex items-center justify-center gap-2">
            <Flame className="w-5 h-5" />
            PROMOÇÃO VÁLIDA APENAS HOJE! Não perca essa chance única de transformar seu corpo antes do Carnaval
            <Flame className="w-5 h-5" />
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-coral-50 via-yellow-50 to-green-50 mt-12">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-coral-500 text-white px-6 py-2 rounded-full mb-6 shadow-lg animate-pulse">
              <Flame className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-wide">Carnaval 2026 está chegando!</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Emagreça <span className="text-coral-600">até 10kg</span> em 30 dias<br />
              e chegue <span className="text-green-600">linda e confiante</span><br />
              no Carnaval! 💃
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Conquiste o corpo dos seus sonhos comendo bem, sem passar fome,<br />
              com receitas práticas, deliciosas e que realmente funcionam!
            </p>

            <button
              onClick={redirectToCheckout}
              className="bg-coral-600 hover:bg-coral-700 text-white text-lg font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-coral-300 transition-all transform hover:scale-105 inline-flex items-center gap-3 animate-pulse"
            >
              Quero Começar Agora
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="mt-6 text-gray-700 flex items-center justify-center gap-2 font-semibold">
              <Users className="w-5 h-5 text-green-600" />
              +5000 pessoas já transformaram sua aparência
            </p>

            <p className="mt-4 text-gray-600 flex items-center justify-center gap-2">
              <Timer className="w-5 h-5 text-coral-600" />
              Faltam apenas {daysToCarnaval} dias para o Carnaval!
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Dados Protegidos</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Garantia de 7 Dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Você já tentou de <span className="text-coral-600">tudo</span>, mas...
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                <X className="w-6 h-6 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                As dietas são muito restritivas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Você passa fome, fica irritada, perde a energia e depois desiste. E quando volta a comer, engorda tudo de novo.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                <X className="w-6 h-6 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Você não tem tempo para cozinhar
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sua rotina é corrida, você trabalha, cuida da casa, da família... e acaba comendo qualquer coisa rápida e nada saudável.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                <X className="w-6 h-6 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                O Carnaval está se aproximando
              </h3>
              <p className="text-gray-600 leading-relaxed">
                E você olha no espelho e sente aquele aperto no coração. Não quer mais se esconder, usar roupas largas ou deixar de aproveitar.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                <X className="w-6 h-6 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sua autoestima está lá embaixo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Você evita tirar fotos, não se sente bonita, e isso afeta sua confiança, seus relacionamentos e sua felicidade.
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-coral-50 to-green-50 p-10 rounded-3xl">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
              Se você não fizer nada agora...<br />
              <span className="text-coral-600">vai chegar no Carnaval exatamente do mesmo jeito.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-wide">A Solução que Funciona</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Apresentamos o<br />
              <span className="text-green-600">Desafio 30 Dias para o Carnaval</span>
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              O método completo, simples e prático para você emagrecer comendo bem, sem passar fome, e chegar radiante no Carnaval!
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Por que este desafio é diferente de tudo?
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Sem Sofrimento</h4>
                <p className="text-gray-600">
                  Você vai comer comidas gostosas, coloridas e que saciam de verdade
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-coral-600" />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Praticidade Total</h4>
                <p className="text-gray-600">
                  Receitas rápidas e fáceis que cabem na sua rotina corrida
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Resultados Reais</h4>
                <p className="text-gray-600">
                  Método testado e comprovado para emagrecimento saudável
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="oferta" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            O que você vai receber:
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Tudo que você precisa para transformar seu corpo em 30 dias
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    📅 Desafio Completo de 30 Dias
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Planejamento dia a dia com orientações claras sobre o que comer, quando comer e como montar suas refeições para emagrecer com saúde.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cronograma organizado semana a semana</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Dicas de motivação e acompanhamento diário</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Estratégias para manter o foco até o fim</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-coral-50 to-coral-100 p-8 rounded-2xl border-2 border-coral-200 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-coral-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Salad className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    🥗 120 Receitas de Saladas Saudáveis e Deliciosas
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Receitas variadas, coloridas, nutritivas e SABOROSAS! Você nunca mais vai enjoar de salada.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-coral-600 mt-0.5 flex-shrink-0" />
                      <span>Receitas para almoço e jantar</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-coral-600 mt-0.5 flex-shrink-0" />
                      <span>Opções com proteínas, grãos e vegetais variados</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-coral-600 mt-0.5 flex-shrink-0" />
                      <span>Ingredientes fáceis de encontrar e preparar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-8 rounded-2xl border-2 border-yellow-200 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    🍯 30 Molhos Saudáveis e Irresistíveis
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Transforme qualquer salada em uma refeição especial! Molhos caseiros, saudáveis e que deixam tudo mais gostoso.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Receitas rápidas e práticas</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Zero culpa, muito sabor</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Variedade para nunca enjoar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-coral-600 to-coral-700 p-8 md:p-12 rounded-3xl text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm animate-bounce shadow-lg">
              🔥 SÓ HOJE!
            </div>
            <p className="text-3xl md:text-4xl font-bold mb-4">
              De <span className="line-through opacity-75">R$ 197</span> por apenas
            </p>
            <p className="text-5xl md:text-7xl font-bold mb-6">
              R$ 15,90
            </p>
            <p className="text-xl mb-8 opacity-90">
              Investimento único • Acesso imediato • Transformação garantida
            </p>
            <button onClick={redirectToCheckout} className="bg-white text-coral-600 hover:bg-gray-100 text-xl font-bold px-12 py-5 rounded-full shadow-2xl hover:shadow-white/20 transition-all transform hover:scale-105 inline-flex items-center gap-3 animate-pulse">
              Garantir Minha Vaga Agora
              <ArrowRight className="w-6 h-6" />
            </button>
            <p className="mt-6 text-sm opacity-90 flex items-center justify-center gap-2">
              <Timer className="w-5 h-5" />
              Essa promoção de R$ 15,90 expira hoje à meia-noite!
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Ambiente Seguro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Lock className="w-5 h-5" />
                <span className="font-semibold">Pagamento Criptografado</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Acesso Instantâneo</span>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-green-600 text-white p-8 rounded-3xl shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">🛡️ Garantia de Satisfação de 7 Dias</h3>
                <p className="text-lg leading-relaxed opacity-95">
                  Se você não gostar do conteúdo ou não se sentir satisfeita por qualquer motivo,
                  devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                  Você não tem nada a perder e tudo a ganhar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-coral-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Como você vai se sentir<br />
            <span className="text-coral-600">daqui a 30 dias?</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Sua transformação vai muito além do corpo
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                <Star className="w-7 h-7 text-coral-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Confiança Renovada
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Você vai olhar no espelho e sorrir. Vai querer tirar fotos, usar aquela roupa que estava guardada, e se sentir linda de verdade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Corpo Leve e Saudável
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Menos inchaço, mais disposição, roupas mais folgadas e aquela sensação incrível de estar cuidando de você mesma.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Autoestima nas Alturas
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Você vai se amar mais, se respeitar mais, e isso vai refletir em todas as áreas da sua vida: relacionamentos, trabalho, felicidade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-coral-100 rounded-full flex items-center justify-center mb-4">
                <Flame className="w-7 h-7 text-coral-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Energia e Vitalidade
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Acordar com disposição, ter energia para aproveitar o dia, brincar no Carnaval sem cansaço. Você vai se sentir viva!
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-10 rounded-3xl shadow-xl text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
              No Carnaval, enquanto outras mulheres vão estar se escondendo...<br />
              <span className="text-green-600">você vai estar radiante, confiante e feliz! 💃✨</span>
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Veja o que nossas alunas estão dizendo
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Resultados reais de pessoas reais
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 mb-4 text-yellow-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Perdi 8kg em 30 dias e me senti INCRÍVEL no Carnaval! As receitas são deliciosas e fáceis de fazer. Nunca pensei que fosse conseguir!"
              </p>
              <p className="font-bold text-gray-900">Maria Silva</p>
              <p className="text-sm text-gray-500">São Paulo, SP</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 mb-4 text-yellow-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Estava sem esperança, mas esse desafio mudou minha vida! Emagreci 6kg e minha autoestima voltou. Recomendo de olhos fechados!"
              </p>
              <p className="font-bold text-gray-900">Ana Costa</p>
              <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 mb-4 text-yellow-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Método prático e que cabe na minha rotina. Perdi 7kg sem passar fome e com muita energia. Valeu cada centavo!"
              </p>
              <p className="font-bold text-gray-900">Juliana Santos</p>
              <p className="text-sm text-gray-500">Belo Horizonte, MG</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-coral-600 to-coral-700 text-white p-8 rounded-3xl text-center shadow-xl">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">5000+</p>
                <p className="text-sm opacity-90">Alunas Transformadas</p>
              </div>
              <div className="w-px h-16 bg-white/30"></div>
              <div>
                <p className="text-4xl font-bold mb-2">4.9/5</p>
                <p className="text-sm opacity-90">Avaliação Média</p>
              </div>
              <div className="w-px h-16 bg-white/30"></div>
              <div>
                <p className="text-4xl font-bold mb-2">98%</p>
                <p className="text-sm opacity-90">Satisfação Garantida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Este desafio é para você?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8" />
                Para você SIM, se:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Quer emagrecer antes do Carnaval e se sentir confiante</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Está cansada de dietas que não funcionam</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Precisa de praticidade na cozinha</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Quer comer bem e com sabor</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Está comprometida em seguir o método por 30 dias</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Quer transformar não só o corpo, mas a autoestima</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-3">
                <X className="w-8 h-8" />
                Não é para você se:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Procura uma "pílula mágica" sem esforço</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Não está disposta a seguir orientações</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Quer resultados sem mudança de hábitos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Não gosta de saladas ou comida saudável</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Não tem compromisso de concluir os 30 dias</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-500 text-white px-6 py-2 rounded-full mb-6">
              <Star className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-wide">Bônus Exclusivos</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              E tem mais! 🎁
            </h2>
            <p className="text-xl text-gray-600">
              Você ainda ganha de presente:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Cardápio Semanal Pronto
              </h3>
              <p className="text-gray-600">
                Sem pensar, sem estresse. Só seguir e emagrecer!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                8 Exercícios para Casa
              </h3>
              <p className="text-gray-600">
                Treinos simples sem precisar de equipamento caro
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lista de Compras Organizada
              </h3>
              <p className="text-gray-600">
                Compre tudo certo de primeira e economize tempo e dinheiro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-coral-600 to-coral-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O Carnaval não espera.<br />
            Sua decisão é <span className="underline">AGORA</span>.
          </h2>

          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95">
            Você tem duas opções:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
            <div className="bg-white/10 backdrop-blur p-6 rounded-2xl">
              <p className="text-lg leading-relaxed">
                <strong className="block mb-2">Opção 1:</strong>
                Continuar como está. Chegar no Carnaval se sentindo insegura, escondendo o corpo, evitando fotos, e depois se arrepender de não ter feito nada.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur p-6 rounded-2xl border-2 border-white/50">
              <p className="text-lg leading-relaxed">
                <strong className="block mb-2">Opção 2:</strong>
                Começar HOJE, seguir o desafio por 30 dias, e chegar no Carnaval linda, leve, confiante e feliz com o seu corpo. ✨
              </p>
            </div>
          </div>

          <button onClick={redirectToCheckout} className="bg-white text-coral-600 hover:bg-gray-100 text-xl font-bold px-12 py-5 rounded-full shadow-2xl hover:shadow-white/20 transition-all transform hover:scale-105 inline-flex items-center gap-3 mb-6 animate-pulse">
            Sim, Eu Escolho a Transformação!
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              <span>SSL Seguro</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Lock className="w-4 h-4" />
              <span>Dados Criptografados</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Award className="w-4 h-4" />
              <span>Garantia 7 Dias</span>
            </div>
          </div>

          <p className="text-lg opacity-90 mb-2">
            💳 Pagamento 100% seguro • Acesso instantâneo
          </p>
          <p className="text-sm opacity-75 flex items-center justify-center gap-2">
            <Timer className="w-4 h-4" />
            Promoção de R$ 15,90 válida apenas hoje!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-lg mb-4 font-semibold">
            Desafio 30 Dias para o Carnaval
          </p>
          <p className="text-gray-400 text-sm">
            Transforme seu corpo, sua autoestima e sua vida em 30 dias. 💃
          </p>
          <p className="text-gray-500 text-xs mt-6">
            © 2026 - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

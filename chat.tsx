import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    KeyboardAvoidingView,
    Platform
  } from 'react-native';
  import { useState, useRef } from 'react';
  import { useRouter } from 'expo-router';
  import jogadores from './jogadores';
  
  type Mensagem = {
    id: string;
    texto: string;
    usuario: boolean;
  };
  
  export default function Chat() {
    const router = useRouter();
  
    const [mensagem, setMensagem] = useState('');
    const [mensagens, setMensagens] = useState<Mensagem[]>([]);
    const [digitando, setDigitando] = useState(false);
  
    const flatListRef = useRef<FlatList>(null);
  
    const enviarMensagem = () => {
      if (!mensagem.trim()) return;
  
      const textoUsuario = mensagem;
  
      const novaMensagem: Mensagem = {
        id: Date.now().toString(),
        texto: textoUsuario,
        usuario: true
      };
  
      setMensagens((prev) => [...prev, novaMensagem]);
      setMensagem('');
      setDigitando(true);
  
      setTimeout(() => {
        const resposta = responderIA(textoUsuario);
  
        const respostaIA: Mensagem = {
          id: Date.now().toString() + 'ia',
          texto: resposta,
          usuario: false
        };
  
        setMensagens((prev) => [...prev, respostaIA]);
        setDigitando(false);
      }, 1200);
    };
  
    // 🧠 IA COM MEMÓRIA
    const responderIA = (pergunta: string) => {
      const p = pergunta.toLowerCase();
  
      // 🔥 comandos especiais
      if (p === '/limpar') {
        setMensagens([]);
        return '🧹 Chat limpo!';
      }
  
      if (p === '/ajuda') {
        return `🤖 Comandos:
  - /limpar → limpa chat
  - jogadores → ver elenco
  - nome do jogador → detalhes`;
      }
  
      // 🔎 jogadores
      if (p.includes('jogadores') || p.includes('time')) {
        return jogadores.map(j => `👤 ${j.nome} (#${j.numero} - ${j.posicao})`).join('\n');
      }
  
      const jogador = jogadores.find(j =>
        p.includes(j.nome.toLowerCase())
      );
  
      if (jogador) {
        return `👤 ${jogador.nome}
  📌 Número: ${jogador.numero}
  ⚽ Posição: ${jogador.posicao}`;
      }
  
      // 🧠 memória simples (última mensagem)
      const ultima = mensagens[mensagens.length - 1]?.texto;
  
      if (ultima && p.includes('ele')) {
        return `🤖 Você está falando sobre: "${ultima}"`;
      }
  
      // ⚽ conhecimento
      if (p.includes('futsal')) {
        return '⚽ Futsal é rápido, jogado em quadra com 5 jogadores.';
      }
  
      if (p.includes('regras')) {
        return '📏 2 tempos de 20min, sem impedimento, substituições livres.';
      }
  
      if (p.includes('posições')) {
        return '👥 Goleiro, Fixo, Alas e Pivô.';
      }
  
      if (p.includes('tempo')) {
        return '⏱️ 2 tempos de 20 minutos.';
      }
  
      // fallback inteligente
      return `🤖 Interessante! Você perguntou: "${pergunta}".
  Tente perguntar sobre jogadores, regras ou use /ajuda`;
    };
  
    const renderItem = ({ item }: { item: Mensagem }) => (
      <View style={[
        styles.bolha,
        item.usuario ? styles.usuario : styles.ia
      ]}>
        <Text style={styles.texto}>{item.texto}</Text>
      </View>
    );
  
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#020617" }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
  
        {/* 🔙 voltar */}
        <TouchableOpacity style={styles.voltar} onPress={() => router.replace('/')}>
          <Text style={styles.textoVoltar}>←</Text>
        </TouchableOpacity>
  
        {/* 🧹 limpar */}
        <TouchableOpacity style={styles.limpar} onPress={() => setMensagens([])}>
          <Text style={{ color: "#000" }}>🧹</Text>
        </TouchableOpacity>
  
        <FlatList
          ref={flatListRef}
          data={mensagens}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 10, paddingTop: 80 }}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
        />
  
        {digitando && (
          <Text style={styles.digitando}>🤖 IA pensando...</Text>
        )}
  
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Digite ou use /ajuda"
            placeholderTextColor="#999"
            value={mensagem}
            onChangeText={setMensagem}
            onSubmitEditing={enviarMensagem}
          />
  
          <TouchableOpacity style={styles.botao} onPress={enviarMensagem}>
            <Text style={{ color: "#000", fontWeight: "bold" }}>➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    voltar: {
      position: "absolute",
      top: 40,
      left: 15,
      backgroundColor: "#22c55e",
      padding: 10,
      borderRadius: 10,
      zIndex: 10
    },
  
    textoVoltar: {
      fontWeight: "bold",
      color: "#000"
    },
  
    limpar: {
      position: "absolute",
      top: 40,
      right: 15,
      backgroundColor: "#facc15",
      padding: 10,
      borderRadius: 10,
      zIndex: 10
    },
  
    bolha: {
      padding: 12,
      borderRadius: 15,
      marginVertical: 5,
      maxWidth: "75%"
    },
  
    usuario: {
      backgroundColor: "#22c55e",
      alignSelf: "flex-end"
    },
  
    ia: {
      backgroundColor: "#1e293b",
      alignSelf: "flex-start"
    },
  
    texto: {
      color: "#fff"
    },
  
    inputArea: {
      flexDirection: "row",
      padding: 10,
      borderTopWidth: 1,
      borderColor: "#334155"
    },
  
    input: {
      flex: 1,
      backgroundColor: "#1e293b",
      color: "#fff",
      padding: 12,
      borderRadius: 20,
      marginRight: 10
    },
  
    botao: {
      backgroundColor: "#22c55e",
      paddingHorizontal: 15,
      borderRadius: 20,
      justifyContent: "center"
    },
  
    digitando: {
      color: "#94a3b8",
      marginLeft: 10,
      marginBottom: 5
    }
  });
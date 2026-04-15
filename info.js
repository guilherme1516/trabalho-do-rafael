import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Info() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botao} onPress={() => router.replace('/')}>
        <Text style={styles.textoBotao}>← Voltar</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scroll}>

        <Text style={styles.titulo}>📚 O que é Futsal?</Text>
        <Text style={styles.texto}>
          O futsal é uma modalidade do futebol jogada em quadra, com 5 jogadores em cada time.
          É um esporte muito rápido, que exige habilidade, raciocínio rápido e trabalho em equipe.
        </Text>

        <Text style={styles.titulo}>⚽ Como funciona o jogo?</Text>
        <Text style={styles.texto}>
          • 5 jogadores por equipe (4 de linha + 1 goleiro){"\n"}
          • 2 tempos de 20 minutos{"\n"}
          • Substituições ilimitadas{"\n"}
          • Não existe impedimento{"\n"}
          • A bola é menor e mais pesada{"\n"}
          • Ganha quem fizer mais gols
        </Text>

        <Text style={styles.titulo}>📏 Regras importantes</Text>
        <Text style={styles.texto}>
          • Faltas acumulativas (após 5 faltas, tem tiro livre){"\n"}
          • Goleiro tem tempo limitado com a bola{"\n"}
          • Laterais e escanteios são cobrados com os pés{"\n"}
          • Jogo muito mais rápido que o futebol de campo
        </Text>

        <Text style={styles.titulo}>👥 Posições no Futsal</Text>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>🧤 Goleiro</Text>
          <Text style={styles.texto}>
            Responsável por defender o gol. Pode usar as mãos dentro da área e iniciar jogadas.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>🛡️ Fixo</Text>
          <Text style={styles.texto}>
            Jogador mais defensivo. Protege o time e organiza a saída de bola.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>⚡ Alas</Text>
          <Text style={styles.texto}>
            Jogadores rápidos que atuam pelos lados da quadra, ajudando no ataque e defesa.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>🎯 Pivô</Text>
          <Text style={styles.texto}>
            Jogador ofensivo que joga perto do gol adversário, responsável por finalizar as jogadas.
          </Text>
        </View>

        <Text style={styles.titulo}>🏆 Curiosidades</Text>
        <Text style={styles.texto}>
          • O Brasil é uma das maiores potências do futsal mundial{"\n"}
          • O futsal ajuda no desenvolvimento de jogadores de futebol{"\n"}
          • Muitos craques começaram no futsal
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617"
  },

  scroll: {
    padding: 20,
    paddingTop: 100,
    paddingBottom: 40
  },

  botao: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#22c55e",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    zIndex: 10
  },

  textoBotao: {
    fontWeight: "bold",
    color: "#000"
  },

  titulo: {
    color: "#22c55e",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10
  },

  subtitulo: {
    color: "#38bdf8",
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold"
  },

  texto: {
    color: "#e2e8f0",
    fontSize: 15,
    marginBottom: 10,
    lineHeight: 22
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10
  }
});
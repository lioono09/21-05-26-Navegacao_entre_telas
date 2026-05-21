import { useRouter } from 'expo-router';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Detalhes() {
  const router = useRouter();

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>
        Tela de detalhes
      </Text>

      <Text style={estilos.subtitulo}>
        Navegação funcionando com Expo Router
      </Text>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => router.back()}
      >
        <Text style={estilos.textoBotao}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 30,
  },

  botao: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 12,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
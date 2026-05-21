import { useRouter } from 'expo-router';

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  profissionais,
  atendimentos,
} from '../dados/dados';

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      
      <Text style={estilos.titulo}>
        SESI PET
      </Text>

      <Text style={estilos.subtitulo}>
        Sistema de gerenciamento pet
      </Text>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() =>
          router.push('/telas/Detalhes')
        }
      >
        <Text style={estilos.textoBotao}>
          Ir para detalhes
        </Text>
      </TouchableOpacity>

      <Text style={estilos.secao}>
        Profissionais
      </Text>

      {profissionais.map((item) => (
        <View
          key={item.id}
          style={estilos.card}
        >
          <Text style={estilos.nome}>
            {item.nome}
          </Text>

          <Text style={estilos.info}>
            {item.especialidade}
          </Text>
        </View>
      ))}

      <Text style={estilos.secao}>
        Atendimentos
      </Text>

      {atendimentos.map((item) => (
        <View
          key={item.id}
          style={estilos.card}
        >
          <Text style={estilos.nome}>
            {item.pet}
          </Text>

          <Text style={estilos.info}>
            Serviço: {item.servico}
          </Text>

          <Text style={estilos.info}>
            Horário: {item.horario}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
  },

  titulo: {
    fontSize: 34,
    fontWeight: '700',
    color: '#2563eb',
    textAlign: 'center',
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 30,
  },

  botao: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  secao: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 15,
    marginTop: 10,
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  nome: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 5,
  },

  info: {
    fontSize: 15,
    color: '#475569',
  },
});
import { useRouter } from 'expo-router';
import { useState } from 'react';

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

import Header from './components/Header';
import tarefas from './dados/tarefas';

export default function Index() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function login() {
    console.log('Dados do Login');
    console.log({ email, senha });
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      
      <Header titulo="SESI PET" />

      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
        }}
        style={estilos.logo}
        resizeMode="contain"
      />

      <Text style={estilos.titulo}>Login</Text>

      <Text style={estilos.subtitulo}>
        Para prosseguir insira seus dados
      </Text>

      <TextInput
        style={estilos.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={estilos.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={login}
      >
        <Text style={estilos.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botaoDetalhes}
        onPress={() => router.push('/telas/Detalhes')}
      >
        <Text style={estilos.textoBotao}>
          Ir para detalhes
        </Text>
      </TouchableOpacity>

      <View style={estilos.lista}>
        {tarefas.map((item) => (
          <View key={item.id} style={estilos.card}>
            
            <Image
              source={{ uri: item.photo }}
              style={estilos.imagemCard}
            />

            <Text style={estilos.tituloCard}>
              {item.title}
            </Text>

            <Text style={estilos.descricao}>
              {item.description}
            </Text>

            <Text style={estilos.status}>
              Status: {item.status}
            </Text>

          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f1f5f9',
    paddingBottom: 30,
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 30,
  },

  titulo: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
    marginTop: 10,
  },

  subtitulo: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 25,
  },

  input: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },

  botao: {
    backgroundColor: '#2563eb',
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  botaoDetalhes: {
    backgroundColor: '#0f172a',
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 25,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  lista: {
    paddingHorizontal: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },

  imagemCard: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },

  tituloCard: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 5,
  },

  descricao: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 8,
  },

  status: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563eb',
  },
});
import Home from './telas/Home';

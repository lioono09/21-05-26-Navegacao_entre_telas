import { View, Text, StyleSheet } from 'react-native';

export default function Header({ titulo }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>{titulo}</Text>

      <Text style={estilos.subtitulo}>
        Organize as suas atividades diárias
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#2563eb',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },

  subtitulo: {
    fontSize: 14,
    color: '#dbeafe',
    marginTop: 4,
  },
});
// components/Register.js
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { Picker } from '@react-native-picker/picker'; // importar picker

const Home = () => {
  const navigation = useNavigation(); // Usa el hook para obtener la navegación
  const [form, setForm] = useState({
    Nombre: '',
    NumArete: '',
    Raza: 'Holstein',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.header}>
          
          <Text style={styles.title}>
            <Text style={{ color: '#789017' }}>Ingresa tu ganado</Text>
          </Text>
          <Text style={styles.subtitle}>
            
          </Text>
        </View>

        <View style={styles.form}>


          <View style={styles.input}>
            <Text style={styles.inputLabel}>Nombre</Text>
            <TextInput
              clearButtonMode="while-editing"
              placeholder="Nombre o sobrenombre "
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              onChangeText={name => setForm({ ...form, name })}
              value={form.name}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Número del arete</Text>
            <TextInput
              clearButtonMode="while-editing"
              placeholder="Nombre completo"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              onChangeText={name => setForm({ ...form, name })}
              value={form.name}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Raza del ganado</Text>
            <Picker
                selectedValue={form.breed} // Valor seleccionado
                style={styles.inputControl} // Aplica estilo
                onValueChange={(itemValue) =>
                setForm({ ...form, breed: itemValue }) // Actualiza el estado cuando cambias la raza
                }>
                <Picker.Item label="Holstein" value="Holstein" />
                <Picker.Item label="Hereford" value="Hereford" />
                <Picker.Item label="Angus" value="Angus" />
                <Picker.Item label="Brahman" value="Brahman" />
                <Picker.Item label="Charolais" value="Charolais" />
            </Picker>
          </View>


          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // Maneja la acción de registro aquí
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Registrar ganado</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#789017',
    textAlign: 'center',
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 0,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    
  },
  /** Button */
  btn: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#789017',
    borderColor: '#789017',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default Home;
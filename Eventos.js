import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';

const Eventos = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventImportance, setEventImportance] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventos, setEventos] = useState([]); // Estado para almacenar los eventos

  useEffect(() => {
    // Aquí puedes cargar eventos correspondientes al mes actual
    // Por ejemplo, desde una base de datos o algún otro origen de datos
    // Simplemente actualiza el estado 'eventos' con los eventos del mes actual
  }, [selectedDate]); // Ejecutar cada vez que cambia selectedDate

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleMonthChange = (month) => {
    // Aquí puedes realizar acciones específicas cuando el usuario cambia de mes
    // Puedes cargar eventos correspondientes al nuevo mes si es necesario
  };

  const handleEventSchedule = () => {
    // Guardar el evento en el estado de eventos
    const nuevoEvento = {
      date: selectedDate,
      name: eventName,
      importance: eventImportance,
      description: eventDescription,
    };
    setEventos([...eventos, nuevoEvento]);

    // Limpiar los campos del formulario y ocultar el modal
    setEventName('');
    setEventImportance('');
    setEventDescription('');
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mis Eventos</Text>
      <Calendar
        onDayPress={handleDateSelect}
        onMonthChange={handleMonthChange} // Manejar el cambio de mes
      />

      {selectedDate && (
        <View style={styles.selectedDateContainer}>
          <Text>Fecha seleccionada: {selectedDate}</Text>
          <Button title="Programar Evento" onPress={toggleModal} />
        </View>
      )}

      <FlatList
        data={eventos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text>Fecha: {item.date}</Text>
            <Text>Nombre: {item.name}</Text>
            <Text>Importancia: {item.importance}</Text>
            <Text>Descripción: {item.description}</Text>
          </View>
        )}
      />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeading}>Programar Evento</Text>
          <TextInput
            placeholder="Nombre del Evento"
            onChangeText={(value) => setEventName(value)}
            value={eventName}
          />
          <TextInput
            placeholder="Grado de Importancia"
            onChangeText={(value) => setEventImportance(value)}
            value={eventImportance}
          />
          <TextInput
            placeholder="Descripción"
            onChangeText={(value) => setEventDescription(value)}
            value={eventDescription}
          />
          <Button title="Guardar Evento" onPress={handleEventSchedule} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 22,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  selectedDateContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalHeading: {
    fontSize: 18,
    marginBottom: 10,
  },
  eventItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default Eventos;

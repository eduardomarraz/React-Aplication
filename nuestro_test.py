from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
 
# Configura el navegador
options = webdriver.ChromeOptions()
options.add_argument('--headless')  # Para ejecución en modo headless
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
 
# Descargar y configurar el controlador Chrome
s = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=s, options=options)
 
def test_page_title():
    # Verificar el título de la página
    driver.get('http://localhost:3000')  # Ajustar la URL si es necesario
    print("Título de la página:", driver.title)  # Debugging: Imprime el título de la página
    if "React App" not in driver.title:
        raise AssertionError("El título de la página no es 'Lista de Tareas'")
 
def test_add_task():
    # Agregar una tarea
    driver.get('http://localhost:3000')  # Ajustar la URL si es necesario
    print("URL actual:", driver.current_url)  # Debugging: Imprime la URL actual
    input_element = driver.find_element(By.CSS_SELECTOR, 'input[type="text"]')
    input_element.send_keys("Nueva tarea de prueba")
    print("Texto introducido en el campo de entrada:", input_element.get_attribute('value'))  # Debugging: Imprime el texto introducido
    driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
    print("Botón de envío clicado")  # Debugging: Indica que el botón de envío ha sido clicado
    time.sleep(1)  # Esperar a que se actualice la lista
    print("Página después de agregar tarea:", driver.page_source)  # Debugging: Imprime el código fuente de la página
 
    # Verificar si la tarea se agregó correctamente
    if "Nueva tarea de prueba" not in driver.page_source:
        raise AssertionError("La tarea no se agregó correctamente")
 
def test_delete_task():
    # Eliminar una tarea si hay al menos una
    print("Prueba: Eliminar una tarea")
    driver.get('http://localhost:3000')  # Ajustar la URL si es necesario
    print("URL actual:", driver.current_url)  # Debugging: Imprime la URL actual
    tasks_before_delete = driver.find_elements(By.CSS_SELECTOR, 'li')
    print("Número de tareas antes de eliminar:", len(tasks_before_delete))  # Debugging: Imprime el número de tareas antes de eliminar
    print("Tareas antes de la eliminación:", [task.text for task in tasks_before_delete])    
    if tasks_before_delete:
        delete_button = tasks_before_delete[0].find_element(By.ID, 'btonborrar')
        delete_button.click()
        print("Botón de eliminar clicado")  # Debugging: Indica que el botón de eliminar ha sido clicado
        time.sleep(1)  # Esperar a que se elimine la tarea
 
        # Verificar si la tarea se eliminó correctamente
        tasks_after_delete = driver.find_elements(By.CSS_SELECTOR, 'li')
        print("Tareas después de la eliminación:", [task.text for task in tasks_after_delete])
 
        print("Número de tareas después de eliminar:", len(tasks_after_delete))  # Debugging: Imprime el número de tareas después de eliminar
        if len(tasks_before_delete) - 1 != len(tasks_after_delete):
            raise AssertionError("La tarea no se eliminó correctamente")

def test_edit_task():
    # Editar una tarea si hay al menos una
    print("Prueba: Editar una tarea")
    driver.get('http://localhost:3000')  # Ajustar la URL si es necesario
    print("URL actual:", driver.current_url)  # Debugging: Imprime la URL actual
    tasks_before_edit = driver.find_elements(By.CSS_SELECTOR, 'li')
    print("Número de tareas antes de editar:", len(tasks_before_edit))  # Debugging: Imprime el número de tareas antes de editar
    print("Tareas antes de la edición:", [task.text for task in tasks_before_edit])
    
    if tasks_before_edit:
        # Selecciona la primera tarea para editar
        task_to_edit = tasks_before_edit[0]
        edit_button = task_to_edit.find_element(By.ID, 'btoneditar')
        edit_button.click()
        print("Botón de editar clicado")  # Debugging: Indica que el botón de editar ha sido clicado
        
        # Esperar a que aparezca el formulario de edición
        time.sleep(1)
        
        # Encuentra el campo de entrada de edición y el botón de enviar
        edit_input = driver.find_element(By.CSS_SELECTOR, 'input[type="text"]')
        submit_button = driver.find_element(By.ID, 'btoneditar')
        
        # Introducir nuevo texto en el campo de entrada
        new_task_text = "Tarea editada de prueba"
        edit_input.clear()
        edit_input.send_keys(new_task_text)
        print("Nuevo texto introducido en el campo de edición:", edit_input.get_attribute('value'))
        
        # Hacer clic en el botón de enviar
        submit_button.click()
        print("Botón de enviar clicado para editar")  # Debugging: Indica que el botón de enviar ha sido clicado
        
        # Esperar a que la tarea sea editada
        time.sleep(1)
        
        # Verificar si la tarea se editó correctamente
        tasks_after_edit = driver.find_elements(By.CSS_SELECTOR, 'li')
        print("Tareas después de la edición:", [task.text for task in tasks_after_edit])
        
        # Comparar el texto de la primera tarea para asegurar que fue editada
        if tasks_after_edit and tasks_after_edit[0].text != new_task_text:
            raise AssertionError("La tarea no se editó correctamente")
        
        print("Número de tareas después de editar:", len(tasks_after_edit))  # Debugging: Imprime el número de tareas después de editar

# Ejemplo de uso
if __name__ == "__main__":
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    import time
    
    driver = webdriver.Chrome()
    
    try:
        test_edit_task()
    finally:
        driver.quit()
 
# Ejecutar las pruebas
try:
    test_page_title()
    test_add_task()
    test_delete_task()
    print("Pruebas exitosas")
except AssertionError as e:
    print("Error en la prueba:", e)
 
# Cierra el navegador
driver.quit()


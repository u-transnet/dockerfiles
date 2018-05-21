[![English](https://thumb.ibb.co/jDrVkd/gb.png)](README.md) [![Russian](https://thumb.ibb.co/cjYMrJ/ru.png)](README.ru.md)

# dockerfiles
Репозиторий с Docker для transnet-core.
Docker приложение состоит из контейнеров:
- [transnet-core](https://github.com/u-transnet/transnet-core);
- [transnet-faucet](https://github.com/u-transnet/utransnet-faucet);
- [witness-scripts](https://github.com/u-transnet/witness-scripts);
- [transnet-ui](https://github.com/u-transnet/utransnet-ui)
- nginx: является входной точкой для ноды, кошелька и faucet. При желании и наличии сертификата можно включить ssl.

## Установка
## Установка docker и docker-compose
Прежде всего нужно качать данный репозиторий и переименовать директорию dockerfiles в более удобное название (на пример transnet). Суть в том, что docker-compose по умолчанию берет название директории в качестве названия проекта и использует как префикс при именовании контейнеров.  

Для начала стоит убедиться, что на машине имеется установленный docker версии 17.12.0-ce и выше и docker-compose версии 1.18.0 и выше.
```
➜  ~ docker --version
Docker version 17.12.0-ce, build c97c6d6
➜  ~ docker-compose --version
docker-compose version 1.18.0, build 8dd22a9
```
В случае если необходима установка или обновление docker или docker compose необходимые инструкции можно найти в документации [docker-compose](https://docs.docker.com/compose/install/) и [docker](https://docs.docker.com/install/) (для docker нужно выбрать docker CE и необходимую платформу на панели слева).

## Подготовка конфигурации

Прежде чем запускать приложение следует определиться с необходимым набором запускаемых контейнеров. Для этого нужно открыть файл `docker-compose.yml` и закомментировать или удалить ненужные разделы, на пример faucet и скрипты заверителей (веб-кошелек в текущей версии не поставляется отельным контейнером и отключается настройками nginx). Если же вы хотите использовать только ноду и получать к ней доступ на прямую через порт 8090 минуя nginx, то вам нужен файл `docker-compose-node.yml`, где объявлена только нода и скрипты заверителей (они отключены, при желании можно раскомментировать).  

Следующим шагом необходимо поправить конфигурацию необходимых контейнеров из __оставшихся в вашей конфигурации__ `docker-compose.yml`. В случае использования `docker-compose-node.yml` конфигурировать имеет смысл только node, но не является обязательным.

### node
Конфигурация располагается в файле `transnet-core/config.ini`. Не является обязательной для настройки, данный файл можно оставить как есть.

### faucet
Конфигурация располагается в файле `faucet/config.yml`. Является обязательной для настройки. Необходимо задать аккаунт и приватный ключ для уплаты комиссии за регистрацию пользователей, а так же остальные обязательные поля.

### nginx
Если вы решили использовать nginx, то конфигурация располганается в файле `nginx/nginx.conf`. Тут можно отключить веб-кошелек в случае необходимости. Данный файл можно оставить как есть __ЕСЛИ ВЫ НЕ ОТКАЗАЛИСЬ ОТ FAUCET ИЛИ NODE__, в противном случае следует убрать проксирование на отключенные контейнеры.

## Старт приложения

Docker и docker-compose установлены, выбран набор контейнеров из которых будет состоять приложение, задана конфигурация каждого модуля. Настало время собрать приложение и запустить в одну команду:
```
docker-compose up -d
```
Только сборка без запуска:
```
docker-compose up --no-start
```
Теперь приложение можно останавливать и запускать:
```
docker-compose stop
docker-compose start
```
Для остановки приложения и удаления контейнеров:
```
docker-compose down
```
Пересобрать в случае внесения изменений:
```
docker-compose build
```
Все команды применимы так же с указанием конкретного модуля приложения:
```
docker-compose stop nginx
```
Для использования файла `docker-compose-node.yml` его следует указывать флагом `-f` со всеми командами:
```
docker compose -f docker-compose-node.yml up
docker compose -f docker-compose-node.yml stop
docker compose -f docker-compose-node.yml start
docker compose -f docker-compose-node.yml down
...
```
Более детальная информация доступна в [документации](https://docs.docker.com/compose/reference/) по командам docker-compose.  
Так же будет полезным ознакомиться с [общей документацией](https://docs.docker.com/compose/) по docker-compose.

## Сотрудничество
Мы будем рады вашей помощи в развитии проекта! Откройте [CONTRIBUTING.ru.md](CONTRIBUTING.ru.md) для того, чтобы узнать чем Вы можете поможете помочь проекту и как присоединиться

## Лицензия
Проект использует MIT лицензию. Откройте [LICENSE](LICENSE) для подробностей


# 🌐 OpenLayers Angular Map Project

An Angular project using **OpenLayers** and **GeoServer** to create a map application with customizable layers. This project provides a streamlined way to visualize both a base map and a Web Map Service (WMS) layer from a GeoServer instance.

## 📋 Prerequisites

Ensure the following dependencies are installed:

- **Node.js**: 18.x
- **Angular CLI**: Install globally with `npm install -g @angular/cli`
- **GeoServer**: Accessible at `http://localhost:8080` and configured with published WMS layers. You can set up a compatible GeoServer by following instructions in the [postgis-server repository](https://github.com/JosephAbdayem/postgis-server).

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/JosephAbdayem/openlayers-angular.git
cd openlayers-angular
```

### 2. Install Project Dependencies

```bash
npm install
```

### 3. Start the Angular Development Server

Run the development server:

```bash
ng serve -o
```

Visit `http://localhost:4200` in your browser to view the application.

## 🚀 Usage

- **OSM Base Layer**: Provides a default OpenStreetMap base layer
- **WMS Layer**: Configured to pull WMS layers from a GeoServer instance at `http://localhost:8080`. This layer can be modified as needed in the code

## 🔄 Customization

**GeoServer WMS Layer**: To change the WMS layer displayed, edit the `params` configuration in `map.component.ts`

  ```typescript
  params: { 'LAYERS': 'your_layer_name', 'TILED': true }
  ```

**Map Center and Zoom**: Update the initial map view in `map.component.ts`

  ```typescript
  center: [longitude, latitude],
  zoom: your_zoom_level
  ```

## 🛠 Project Structure

- **Angular**: Built with Angular standalone components
- **OpenLayers**: Provides map rendering and layer management
- **GeoServer Integration**: Uses `ImageWMS` to retrieve layers from GeoServer

---

## 💬 Issues and Contributions

Feel free to open issues for any bugs or feature requests. Contributions are welcome through pull requests to help improve the project!

## 📜 License

This project is licensed under the [MIT License](LICENSE)
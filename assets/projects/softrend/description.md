A software renderer I made as part of ECS175 (Computer Graphics) at UC Davis as an undergrad.
The project was supposed to be a simple CPU mesh renderer with basic Gouraud shading, but I went a little overboard and implemented a full OpenGL-like shader pipeline (i.e., vertex shaders, fragment shaders, texture samplers, etc.). For whatever reason, I also implemented my own UI library from scratch with event propogation, all the standard UI components, support for rendering multiple 3D views, and more.
I did this all in C++, using SDL2 to handle interacting with the OS.
I tried to make this as much like OpenGL as possible, and you can do whatever you want in user-defined shaders (just like in OpenGL).

---

<figure class="image">
<img src="assets/projects/softrend/banana.png" alt="A rendered banana."/>
<figcaption>A hi-poly textured banana. Specifically, multiple views of a hi-poly textured banana.</figcaption>
</figure>

<figure class="image">
<img src="assets/projects/softrend/rainbowcow.png" alt="A rainbow cow."/>
<figcaption>Arbitrary shader support as visualized by this rainbow cow.</figcaption>
</figure>

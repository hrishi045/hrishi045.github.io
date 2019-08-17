---
layout: default
title: Adventures installing Linux on ASUS FX505DT
---

# Adventures installing Linux on ASUS FX505DT

I've installed Linux several hundred times on a dozen different machines of varying hardware configurations. I often run into minor issues and they're usually easy to fix, with a select few requiring hours of troubleshooting. I bought this relatively new gaming laptop without much consideration for how it would handle Linux. I thought it would *just work*, like it has always does on my other machines. It didn't take me long to realize I was wrong.

This laptop has an *Optimus* setup. No, it's not an Intel+NVIDIA configuration, it's a Ryzen+NVIDIA, Radeon Vega 8 iGPU and an NVIDIA GTX 1650. I don't see a reason why it shouldn't work. The Linux Kernel 5.x ships with support for Ryzen 3000 series CPUs, so it should work out of the box. 

I installed Ubuntu Desktop 18.04, the installation went smoothly. I could boot into it just fine. Everything works. Great so far. I connect it to my external monitor which is more comfortable for me to work on and.. the OS fails to detect it. `xrandr` shows just the laptop's monitor. `xrandr --listproviders` displays just the AMD GPU. Now this isn't something I've had to deal with before, so I was clueless as to how to go on about fixing this. I looked online for solutions. Since this is an optimus setup, enabling hybrid switchable graphics using something like Bumblebee or PRIME seemed like a good idea. Installing NVIDIA Prime didn't really fix it. After tinkering with it for a day or two, I gave up. I decided to try other distros, hoping to find one that works out of the box. 

I came across someone trying to get a similar model (Ryzen+NVIDIA setup) to work with OpenSUSE, so I gave it a try. Out of the box, it didn't work. But after NVIDIA proprietary drivers and SUSEPrime and [configuring prime as mentioned in this thread](https://devtalk.nvidia.com/default/topic/1055357/amd-ryzen-7-integrated-gpu-nvidia-1650-in-same-linux-machine-cause-xorg-to-default-to-outdated-drivers/), I was able to get it to work. My external monitor was detected. I was happy, and used it for a few days. I started up TF2 and realized that something was off. On Medium settings, I got about 30-40 fps. Which implied the game wasn't running on the 1650. I was too lazy to fix it, so I just gave up and played the game on low settings, using a framerate-improving configuration for a few weeks. I wasn't really satisfied with it, since I couldn't use the dedicated GPU and playing an FPS at 50fps was painful. So I decided to try other distributions.

I gave Fedora 30 a try. After installing NVIDIA proprietary drivers and rebooting the machine, my external monitor was detected. But the laptop monitor wasn't (????). `xrandr --listproviders` only showed the NVIDIA GPU. Tinkered with it for a few hours, and I made no progress. 

## Arch worked

I installed Arch and.. it worked out of the box. I'm currently running Gnome with GDM as my display manager. Everything works great. However, all applications run on the NVIDIA GPU. Vega 8 isn't being used at all, from what I've noticed. There are a few caveats, however. Other display managers don't seem to work. LightDM fails to start. Wayland doesn't work with multiple monitors. Other desktop environments or window manager may not work, I haven't had the time or the patience to test if they do. But anything Xorg based should work. 

If you're trying to get Arch Linux to work on a similar setup, enable `multilib` repos in `/etc/pacman.conf` install Gnome, GDM and proprietary NVIDIA drivers.

`sudo pacman -S gnome gdm nvidia lib32-nvidia-utils`

Enable GDM

`sudo systemctl enable gdm`

You might have luck getting switchable graphics to work on Arch Linux, but battery performance isn't something I'm after, so I'm likely not going to set anything up of that sort. 

Ryzen and NVIDIA laptops are pretty new as of now and it might take a several months to a year before we see distros running on them out of the box. I would advise against getting one right now, if Linux compatibility is something you're after. Getting Linux to work on this laptop is not for the faint of heart. Even if it does work, you're likely to encounter tons of bugs and problems as you use it. Instead, I'd recommend a Ryzen+AMD laptop instead. They're considerably more Linux-friendly. 
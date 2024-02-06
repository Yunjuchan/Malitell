using UnityEngine;
using UnityEngine.UI;

public class BackgroundMusicController : MonoBehaviour
{
    public AudioSource bgmSource; // 배경 음악을 재생할 AudioSource
    public Slider volumeSlider; // 볼륨을 조절할 슬라이더

    void Start()
    {
        // 초기 볼륨 설정
        if (bgmSource != null && volumeSlider != null)
        {
            volumeSlider.value = bgmSource.volume;
        }
    }

    // 슬라이더의 값이 변경될 때 호출되는 함수
    public void OnVolumeChanged()
    {
        if (bgmSource != null && volumeSlider != null)
        {
            // 슬라이더의 값으로 볼륨을 조절
            bgmSource.volume = volumeSlider.value;
        }
    }
}
